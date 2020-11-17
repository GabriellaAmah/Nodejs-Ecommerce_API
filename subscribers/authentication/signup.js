import User from '../../models/userModel.js';
import { hashPassword, userExist } from '../../utils/helpers.js';

async function SignUp(req, res, next) {
    try {
        const { email, name, password } = req.body
      
        await userExist(email, User, 501, 'this user is already registered')

        const newUser = new User({
            email,
            name,
            password: await hashPassword(password, 12)
        })

        let savedUser = await newUser.save()

        return res.status(201).json({
            message: "a new user has been created",
            user: savedUser._id
        })
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 422
        }
        next(error)
    }
}

export default SignUp