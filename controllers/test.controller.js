import Language from '../utility/language.json'
import Countries from '../utility/countries.json'
import LanguageSchema from '../models/language.model'
import CountrySchema from '../models/country.model'
import AssignSchema from '../models/assign.model';

export const test = (req, res, next) => {
    res.send("pong");
};

export const importLanguage = (req, res, next) => {
    console.log(Language)
    for (let lang of Language) {
        console.log(lang.language)
        const data = new LanguageSchema({
            language: lang.language,
            isRTL: lang.direction === "rtl"
        });
        data.save().then(savedData => console.log(savedData))
    }
};

export const importCountries = (req, res, next) => {
    console.log(Countries)
    for (let country of Countries) {
        const data =  new CountrySchema({
            name: country.country,
            languages: country.languages
        });
        data.save().then(savedData => console.log(savedData))
    }
};

export const createAssign = (req, res, next) => {
    const newAssign = new AssignSchema({
        user: [1],
        profile: [1],
        country: [1],
        language: [1],
        shop: [1],
        createdAt: Date.now(),
        createdBy: 'Main Admin',
        updatedBy: 'Main Admin'
    });
    newAssign.save();
};
