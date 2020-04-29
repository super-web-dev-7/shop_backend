import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from "../config/config";
import UserSchema from '../models/user.model';

const saltRounds = 10;

export const getAll = (req, res, next) => {
    UserSchema.find({}).populate('country').populate('language').populate('shop').populate('profile').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const getUser = (req, res, next) => {
    UserSchema.findOne({_id: req.params.id}).populate('language').populate('country').populate('profile').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addUser = (req, res, next) => {
    const user = req.body;
    console.log(user)
    UserSchema.find({email: user.email}, function (err, result) {
        if (result.length > 0) {
            res.status(200).json({unique: false});
        } else {
            bcrypt.hash(user.password, saltRounds, function(err, hash) {
                const userModel = new UserSchema({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: hash,
                    country: user.country,
                    language: user.language,
                    role: user.role,
                    shop: user.shop,
                    status: true,
                    profile: user.profile
                });

                userModel.save()
                    .then(savedUser => res.status(201).json({unique: true, data: savedUser}))
                    .catch(e => next(e));
            });
        }
    })

};

export const editUser = (req, res, next) => {
    let id = req.params.id;
    let updatedUser = req.body;
    UserSchema.updateOne({_id: id}, updatedUser, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });
};

export const deleteUser = (req, res) => {
    let id = req.params.id;
    UserSchema.deleteOne({_id: id}, function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(204).json(result);
    })
};

export const getUsersForShopAdmin = (req, res, next) => {
    let id = req.params.id;
    UserSchema.find({shop: id}).populate('language').populate('country').populate('profile').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addShopAdmin = (req, res, next) => {
    const user = req.body;
    UserSchema.find({email: user.email}, function (err, result) {
        if (result.length > 0) res.status(200).json({unique: false});
        else {
            bcrypt.hash(user.password, saltRounds, function(err, hash) {
                const userModel = new UserSchema({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: hash,
                    country: user.country,
                    language: user.language,
                    shop: user.shop,
                    role: 1,
                    status: true,
                    profile: user.profile
                });

                userModel.save()
                    .then(savedUser => res.status(201).json({unique: true, data: savedUser}))
                    .catch(e => res.status(500).json(e));
            });
        }
    })
};
