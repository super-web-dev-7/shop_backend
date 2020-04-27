import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const fs = require('fs');
import User from '../models/user.model';
import config from "../config/config";

const saltRounds = 10;

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await User.getUserByEmail(email);
    console.log(user)
    // const privateKey = fs.readFileSync(__dirname + '/../private.key', 'utf8');
    // console.log("privatekey >>>>", privateKey)
    if(user) {
        bcrypt.compare(password, user.password, function(err, result) {
            if(result) {
                // Passwords match
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    language: user.language.language,
                    isRTL: user.language.isRTL,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    shop: user.shop
                }, config.jwtSecret);
                res.json({ token });
            } else {
                // Passwords don't match
                res.status(400).send({
                    message: 'Incorrect Email or Password!'
                });
            }
        });
    } else {
        res.status(400).send({
            message: 'Incorrect Email or Password'
        });
    }
};

export const signup = (req, res, next) => {
    const user = req.body;
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        const userModel = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: hash,
            country: user.country,
            language: user.language
        });

        userModel.save()
            .then(savedUser => res.status(201).json(savedUser))
            .catch(e => next(e));
    });
};
