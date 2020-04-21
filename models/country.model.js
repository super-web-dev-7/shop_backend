import mongoose from 'mongoose';
const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    languages: {
        type: [{type: mongoose.Schema.Types.ObjectID, ref: "Language"}],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Country', CountrySchema);
