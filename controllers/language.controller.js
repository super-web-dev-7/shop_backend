import LanguageSchema from '../models/language.model';

export const getAll = (req, res, next) => {
    LanguageSchema.find({}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result)
    })
};

export const addLanguage = (req, res) => {
    const newLanguage = new LanguageSchema(req.body);
    newLanguage.save()
        .then(result => res.status(201).json(result))
        .catch(e => next(e));
};

export const deleteLanguage = (req, res) => {
    LanguageSchema.deleteOne({_id: req.params.id}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(204).json(result);
    })
};

export const editLanguage = (req, res) => {
    LanguageSchema.updateOne({_id: req.params.id}, req.body, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};
