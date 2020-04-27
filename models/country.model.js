import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

CountrySchema.plugin(uniqueValidator);

export default mongoose.model('Country', CountrySchema);
