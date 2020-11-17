import SignUp from '../subscribers/authentication/signup.js'
import logUserIn from '../subscribers/authentication/login.js'
import express from 'express';
import logout from '../subscribers/authentication/logout.js';

let router = express.Router();

router.post('/signup', SignUp)

router.post('/login' , logUserIn)

router.post('/logout', logout)

export default router