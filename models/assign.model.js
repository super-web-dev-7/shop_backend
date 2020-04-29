import mongoose from 'mongoose';

const AssignSchema = new mongoose.Schema({
    user: {
        type: [Number],
        required: true,
        default: []
    },
    profile: {
        type: [Number],
        required: true,
        default: []
    },
    country: {
        type: [Number],
        required: true,
        default: []
    },
    language: {
        type: [Number],
        required: true,
        default: []
    },
    shop: {
        type: [Number],
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
    },
    createdBy: {
        type: String,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    updatedBy: {
        type: String,
    }
});

export default mongoose.model('Assign', AssignSchema);
