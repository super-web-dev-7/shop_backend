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
