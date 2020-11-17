// eslint-disable-next-line node/no-extraneous-import
import { default as jwt } from 'jsonwebtoken';
import { VerificationError } from '../utils/errors.js';

async function isAuth(req, _, next) {
    try {
        //  let token = req.get('Authorization').split(' ')[1];

        let token = req.signedCookies.serverToken

        await jwt.verify(token, process.env.SECRET_KEY, (err, verified) => {
            if (err) {
                throw new VerificationError(403, 'this user was not verified')
            }

            req.userId = verified._id
        })
        next()
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

export default isAuth