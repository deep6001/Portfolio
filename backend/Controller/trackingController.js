import Visit from '../Models/Visit.js';
import Event from '../Models/Event.js';
import requestIp from 'request-ip';
import useragent from 'useragent';
import geoip from 'geoip-lite';

export const trackVisit = async (req, res) => {
    const { sessionId, referrer, screenResolution, utmSource, utmMedium, utmCampaign } = req.body;
    const clientIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(clientIp);
    const agent = useragent.parse(req.headers['user-agent']);

    try {
        const visit = new Visit({
            sessionId,
            ipAddress: clientIp,
            country: geo?.country || 'Unknown',
            city: geo?.city || 'Unknown',
            timezone: geo?.timezone || 'Unknown',
            deviceType: agent.device.family === 'Other' ? 'Desktop' : agent.device.family,
            browser: agent.family,
            os: agent.os.family,
            screenResolution,
            referrerSource: referrer || 'Direct',
            utmSource,
            utmMedium,
            utmCampaign
        });

        await visit.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Track Visit Error:', error);
        res.status(500).json({ success: false });
    }
};

export const trackEvent = async (req, res) => {
    const { sessionId, eventType, eventData } = req.body;

    try {
        const event = new Event({
            sessionId,
            eventType,
            eventData
        });

        await event.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Track Event Error:', error);
        res.status(500).json({ success: false });
    }
};
