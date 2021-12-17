import Router from 'express';
import userDetails from '../models/User.js';
import config from 'config';
import bcrypt from 'bcryptjs';
import {check, validationResult} from 'express-validator';
import jwt from "jsonwebtoken";
import authMiddleware from '../middleware/auth.middleware.js';
import {routeNames} from "../../organizer/src/router";

const router = new Router();

router.post('/registration',
    [
        check('email', "Incorrect email").isEmail(),
        check('password', "Incorrect password").isLength({min: 3, max: 12})
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors});
        }

        try {
            const {email, password} = req.body;
            const candidate = await userDetails.findOne({email});

            //    checking if there is some user with such email
            if (candidate) {
                return res.status(400).json({message: `User with such ${email} already exists`})
            }
            //    if no, then create and save new user
            const hashPassword = await bcrypt.hash(password, 8);
            const user = new userDetails({email, password: hashPassword});
            await user.save();

            return res.json({message: 'User was created'});
        } catch (e) {
            console.log(e);
        }
    }
)

router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await userDetails.findOne({email});

            if (!user) {
                return res.status(404).json({message: "User not found"});
            }
            //    if user found, check if passwords are equal
            const isPassValid = bcrypt.compareSync(password, user.password);

            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"});
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e);
            res.send({message: "server error"});
        }
    }
)

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await userDetails.findOne({_id: req.user.id});
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e);
            res.send({message: "server error"});
        }
    }
)

export default router;
