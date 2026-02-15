import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    sessionId: { type: String, required: true },
    eventType: { type: String, required: true }, // 'pageView', 'click', 'scroll', 'hover'
    eventData: {
        pagePath: String,
        pageTitle: String,
        elementId: String,
        elementType: String,
        value: mongoose.Schema.Types.Mixed,
        scrollDepth: Number
    },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
