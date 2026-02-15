import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
    sessionId: { type: String, required: true },
    ipAddress: String,
    country: String,
    city: String,
    timezone: String,
    deviceType: String,
    browser: String,
    os: String,
    screenResolution: String,
    referrerSource: String,
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Visit', visitSchema);
