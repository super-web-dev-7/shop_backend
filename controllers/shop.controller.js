import ShopSchema from '../models/shop.model';

export const addShop = (req, res, next) => {
    console.log(req.body);
    const newShop = new ShopSchema({
        companyName: req.body.companyName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: req.body.status,
        createdBy: req.body.createdBy,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        updatedBy: req.body.createdBy
    });
    newShop.save()
        .then(result => res.status(201).json(result)).catch(e => next(e))
};

export const getAllShops = (req, res, next) => {
    ShopSchema.find({}).sort('-createdAt').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const deleteShop = (req, res, next) => {
    ShopSchema.deleteOne({_id: req.params.id}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(204).json(result);
    })
};

export const editShop = (req, res, next) => {
    console.log(req.body)
    const updateData = {
        companyName: req.body.companyName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: req.body.status,
        updatedBy: req.body.updatedBy,
        updatedAt: Date.now()
    };
    ShopSchema.updateOne({_id: req.params.id}, updateData, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
    // ShopSchema.updateOne({_id: req.params.id}, )
}

