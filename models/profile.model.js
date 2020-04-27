import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shopID: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Shop"
    },
    isMainAdmin: {
        type: Boolean,
        default: false
    },
    user: {
        type: [Number],
    },
    profile: {
        type: [Number],
    },
    country: {
        type: [Number],
    },
    language: {
        type: [Number],
    },
    shop: {
        type: [Number],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String
    }
});

export default mongoose.model('Profile', ProfileSchema);
