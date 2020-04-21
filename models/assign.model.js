import mongoose from 'mongoose';

const AssignSchema = new mongoose.Schema({
    user: {
        type: [Number],
        required: true,
    },
    profile: {
        type: [Number],
        required: true,
    },
    country: {
        type: [Number],
        required: true,
    },
    language: {
        type: [Number],
        required: true,
    },
    shop: {
        type: [Number],
        required: true,
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
