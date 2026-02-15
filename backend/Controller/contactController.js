import nodemailer from 'nodemailer';
import Lead from '../Models/Lead.js';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import useragent from 'useragent';

export const sendContactEmail = async (req, res) => {
    const { name, email, message, sessionId, analyticsData } = req.body;
    const clientIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(clientIp);
    const agent = useragent.parse(req.headers['user-agent']);

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // Compute Lead Score (Simplified)
        let leadScore = 20; // Base score
        if (analyticsData?.pagesViewed > 3) leadScore += 20;
        if (analyticsData?.timeOnSite > 60) leadScore += 20;
        if (analyticsData?.interactions > 5) leadScore += 20;

        const intent = leadScore > 60 ? 'high' : leadScore > 40 ? 'medium' : 'low';

        // Save Lead to DB
        const lead = new Lead({
            name,
            email,
            message,
            sessionId,
            ipAddress: clientIp,
            country: geo?.country || 'Unknown',
            city: geo?.city || 'Unknown',
            deviceType: agent.device.family === 'Other' ? 'Desktop' : agent.device.family,
            leadScore,
            intent,
            behaviorSnapshot: {
                pagesViewed: analyticsData?.pagesViewed || 0,
                timeOnSite: analyticsData?.timeOnSite || 0,
                totalInteractions: analyticsData?.interactions || 0
            }
        });

        await lead.save();

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Lead: ${name} (Score: ${leadScore})`,
            text: `Name: ${name}\nEmail: ${email}\nScore: ${leadScore}\nIntent: ${intent}\nMessage: ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent and lead captured!" });
    } catch (error) {
        console.error("Error processing contact:", error);
        res.status(500).json({ success: false, message: "Failed to process message" });
    }
};

