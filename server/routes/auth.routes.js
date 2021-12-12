import Router from 'express';
import userDetails from '../models/User.js';
import bcrypt from 'bcryptjs';
import {check, validationResult} from 'express-validator';

const router = new Router();

export default router.post('/registration',
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
            const hashPassword = await bcrypt.hash(password, 15);
            const user = new userDetails({email, password: hashPassword});
            await user.save();

            return res.json({message: 'User was created'});
        } catch (e) {
            console.log(e);
        }
    }
)
