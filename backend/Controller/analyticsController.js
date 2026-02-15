import Visit from '../Models/Visit.js';
import Event from '../Models/Event.js';
import Lead from '../Models/Lead.js';

export const getOverview = async (req, res) => {
    try {
        const totalVisitors = await Visit.countDocuments();
        const uniqueVisitors = (await Visit.distinct('sessionId')).length;
        const totalLeads = await Lead.countDocuments();
        const conversionRate = totalVisitors > 0 ? (totalLeads / totalVisitors * 100).toFixed(2) : 0;

        // Simple aggregation for chart (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const dailyTraffic = await Visit.aggregate([
            { $match: { timestamp: { $gte: sevenDaysAgo } } },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalVisitors,
                uniqueVisitors,
                totalLeads,
                conversionRate,
                dailyTraffic
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getLeadIntelligence = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ timestamp: -1 });
        res.status(200).json({ success: true, data: leads });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// ... More specific analytics functions (Geo, Behavior, etc.) will go here
