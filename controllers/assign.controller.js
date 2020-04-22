import AssignSchema from '../models/assign.model';

export const getData = (req, res, next) => {
    AssignSchema.find({}).exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
    // const newAssign = new AssignSchema({
    //     user: [1],
    //     profile: [1],
    //     country: [1],
    //     language: [1],
    //     shop: [1],
    //     createdAt: Date.now(),
    //     createdBy: 'Main Admin',
    //     updatedBy: 'Main Admin'
    // })
    // newAssign.save();
};

export const updateData = (req, res, next) => {
    AssignSchema.updateOne({_id: req.params.id}, req.body, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};
