import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from "../config/config";
import UserSchema from '../models/user.model';

const saltRounds = 10;

export const getAll = (req, res, next) => {
    UserSchema.find({}).populate('country').populate('language').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const getUser = (req, res, next) => {
    UserSchema.find({_id: req.params.id}).populate('language').populate('country').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const editUser = (req, res, next) => {
    let id = req.params.id;
    let updatedUser = req.body;

    bcrypt.hash(updatedUser.password, saltRounds, function (error, hash) {
        updatedUser.password = hash;
        UserSchema.updateOne({_id: id}, updatedUser, function (err, result) {
            if (err) res.status(500).json(err);
            else res.status(200).json(result);
        })
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
    UserSchema.find({shop: id}).populate('language').populate('country').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const addShopAdmin = (req, res, next) => {
    const user = req.body;
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        const userModel = new UserSchema({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: hash,
            country: user.country,
            language: user.language,
            shop: user.shop,
            role: 1
        });

        userModel.save()
            .then(savedUser => res.status(201).json(savedUser))
            .catch(e => next(e));
    });
};
