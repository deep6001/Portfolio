import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    sessionId: String,
    ipAddress: String,
    country: String,
    city: String,
    deviceType: String,
    referrer: String,
    leadScore: { type: Number, default: 0 },
    intent: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
    status: { type: String, enum: ['New', 'Contacted', 'Closed'], default: 'New' },
    behaviorSnapshot: {
        pagesViewed: Number,
        timeOnSite: Number,
        totalInteractions: Number,
        lastPageSeen: String
    },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);
