import CountrySchema from '../models/country.model';

export const getAll = (req, res, next) => {
    CountrySchema.find({}).populate('languages').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addCountry = (req, res, next) => {
    const newCountry = new CountrySchema(req.body);
    newCountry.save().then(result => res.status(201).json({status: 'success', result: result})).catch(e => {
        if (e.errors.name.properties.type === 'unique') {
            console.log(e)
            res.send({status: 'duplicated'})
        } else {
            res.status(500).json({status: 'Server Error'});
            next(e);
        }
    })
};

export const deleteCountry = (req, res) => {
    CountrySchema.deleteOne({_id: req.params.id}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(204).json(result);
    })
};

export const editCountry = (req, res) => {
    CountrySchema.updateOne({_id: req.params.id}, req.body, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};
