import mongoose from 'mongoose';
const LanguageSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    isRTL: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Language', LanguageSchema);
