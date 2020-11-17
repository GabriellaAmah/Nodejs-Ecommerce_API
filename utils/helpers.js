/* eslint-disable node/no-extraneous-import */
import bcryptjs from 'bcryptjs';
import { default as jwt } from 'jsonwebtoken';
import { DataBase, VerificationError } from './errors.js'


async function hashPassword(passwordToHash, salt) {
    const result = await bcryptjs.hash(passwordToHash, salt)
    return result
}

async function comparePassword(passwordToCompare, hashedPassword, ...params) {
    let equalPassword = await bcryptjs.compare(passwordToCompare, hashedPassword)
    if (equalPassword) {
        return true
    } else {
        console.log('do not match')
        throw new DataBase(params[0], params[1])
    }
}

async function getLoginToken(user, secretKey, expireTime) {
    return jwt.sign(user, secretKey, expireTime)
}

async function userExist(email, userDatabase, ...parameters) {
    let user = await userDatabase.findOne({ email });
    if (user) {
        throw new DataBase(parameters[0], parameters[1])
    }
}

async function userExist2(email, userDatabase, ...parameters) {
    let user = await userDatabase.findOne({ email });
    if (!user) {
        throw new DataBase(parameters[0], parameters[1])
    }
    return user
}

async function authorizedUser(reqId, userId) {
    if (reqId != userId) {
        throw new VerificationError(401, 'you are not authorized to carry out this action')
    } else {
        return true
    }
}


export {
    hashPassword,
    comparePassword,
    getLoginToken,
    userExist,
    userExist2,
    authorizedUser
}