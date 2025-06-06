import ProfileSchema from '../models/profile.model';

export const getAll = (req, res, next) => {
    ProfileSchema.find({}).populate('shopID').sort('-createdAt').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addProfile = (req, res, next) => {
    const newProfile = new ProfileSchema({
        name: req.body.name,
        shopID: req.body.shopId,
        createdBy: req.body.createdBy,
        isMainAdmin: req.body.isMainAdmin,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        updatedBy: req.body.createdBy
    });
    if (req.body.isMainAdmin === true) {
        ProfileSchema.find({name: req.body.name, isMainAdmin: true}).exec(function (err, result) {
            if (result.length > 0) {
                res.send({status: 'duplicated'})
            } else {
                newProfile.save().then(result => res.status(201).json({status: 'success', result: result})).catch(e => next(e))
            }
        })
    } else {
        ProfileSchema.find({name: req.body.name, shopID: req.body.shopId}).exec(function (err, result) {
            if (result.length > 0) {
                res.send({status: 'duplicated'})
            } else {
                newProfile.save().then(result => res.status(201).json({status: 'success', result: result})).catch(e => next(e))
            }
        })
    }
};

export const deleteProfile = (req, res, next) => {
    ProfileSchema.deleteOne({_id: req.params.id}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(204).json(result);
    })
};

export const editProfile = (req, res, next) => {
    const updateData = {
        name: req.body.name,
        shopID: req.body.shopID,
        isMainAdmin: req.body.isMainAdmin,
        updatedBy: req.body.updatedBy,
        updatedAt: Date.now(),
    };

    ProfileSchema.updateOne({_id: req.params.id}, updateData, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
};

export const assignToProfile = (req, res, next) => {
    const assignData = {
        user: req.body.user,
        country:req.body.country,
        language:req.body.language,
        profile: req.body.profile,
        shop: req.body.shop,
        updatedBy: req.body.updatedBy,
        updatedAt: Date.now()
    };

    ProfileSchema.updateOne({_id: req.params.id}, assignData, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
}

export const getProfilesForShopAdmin = (req, res, next) => {
    let shopId = req.params.shopId;
    ProfileSchema.find({shopID: shopId}).populate('shopID').sort('-createdAt').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
}
