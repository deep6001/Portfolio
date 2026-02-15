import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

// Generate a persistable session ID
const getSessionId = () => {
    let sessionId = sessionStorage.getItem('portfolio_session_id');
    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('portfolio_session_id', sessionId);
    }
    return sessionId;
};

export const useAnalytics = () => {
    const location = useLocation();
    const sessionId = getSessionId();

    const getStats = useCallback(() => {
        const stored = localStorage.getItem(`stats_${sessionId}`);

        if (stored) {
            try {
                return JSON.parse(stored);
            } catch {
                // corrupted data fallback
                const fresh = {
                    pagesViewed: 0,
                    startTime: Date.now(),
                    interactions: 0
                };
                localStorage.setItem(`stats_${sessionId}`, JSON.stringify(fresh));
                return fresh;
            }
        }

        // first visit
        const fresh = {
            pagesViewed: 0,
            startTime: Date.now(),
            interactions: 0
        };

        localStorage.setItem(`stats_${sessionId}`, JSON.stringify(fresh));
        return fresh;
    }, [sessionId]);


    const updateStats = useCallback((updater) => {
        const stats = getStats();
        const newStats = typeof updater === 'function' ? updater(stats) : { ...stats, ...updater };
        localStorage.setItem(`stats_${sessionId}`, JSON.stringify(newStats));
    }, [sessionId, getStats]);

    const trackVisit = useCallback(async () => {
        const hasTrackedVisit = sessionStorage.getItem('has_tracked_visit');
        if (hasTrackedVisit) return;

        try {
            await fetch(`${API_BASE_URL}/track/visit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    referrer: document.referrer,
                    screenResolution: `${window.screen.width}x${window.screen.height}`,
                })
            });
            sessionStorage.setItem('has_tracked_visit', 'true');
            updateStats({ pagesViewed: 0, startTime: Date.now(), interactions: 0 });
        } catch (error) {
            console.error('Analytics: Failed to track visit', error);
        }
    }, [sessionId, updateStats]);

    const trackPageView = useCallback(async (path, title) => {
        try {
            await fetch(`${API_BASE_URL}/track/event`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    eventType: 'pageView',
                    eventData: {
                        pagePath: path,
                        pageTitle: title
                    }
                })
            });
            updateStats(s => ({ ...s, pagesViewed: s.pagesViewed + 1 }));
        } catch (error) {
            console.error('Analytics: Failed to track page view', error);
        }
    }, [sessionId, updateStats]);

    const trackClick = useCallback(async (elementId, elementType, additionalData = {}) => {
        try {
            await fetch(`${API_BASE_URL}/track/event`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    eventType: 'click',
                    eventData: {
                        elementId,
                        elementType,
                        ...additionalData,
                        pagePath: location.pathname
                    }
                })
            });
            updateStats(s => ({ ...s, interactions: s.interactions + 1 }));
        } catch (error) {
            console.error('Analytics: Failed to track click', error);
        }
    }, [sessionId, location.pathname, updateStats]);

    useEffect(() => {
        trackVisit();
    }, [trackVisit]);

    useEffect(() => {
        trackPageView(location.pathname, document.title);
    }, [location.pathname, trackPageView]);

    const getAnalyticsData = () => {
        const stats = getStats();
        return {
            ...stats,
            timeOnSite: Math.floor((Date.now() - stats.startTime) / 1000)
        };
    };

    return { trackClick, sessionId, getAnalyticsData };
};
export default useAnalytics;

