import Language from '../utility/language.json'
import Countries from '../utility/countries.json'
import LanguageSchema from '../models/language.model'
import CountrySchema from '../models/country.model'

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
        })
        data.save().then(savedData => console.log(savedData))
    }
}
