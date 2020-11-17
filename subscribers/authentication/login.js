import User from "../../models/userModel.js";
import {
  comparePassword,
  getLoginToken,
  userExist2,
} from "../../utils/helpers.js";

async function logUserIn(req, res, next) {
  const { email, password } = req.body;

  try {
    let user = await userExist2(
      email,
      User,
      403,
      "this email is not registered"
    );

    await comparePassword(
      password,
      user.password,
      403,
      "password do not match"
    );

    let token = await getLoginToken(
      { _id: user._id, name: user.name },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );

    req.userId = user._id;

    res
      .status(201)
      .cookie("serverToken", token, {
        httpOnly: true,
        expire: 60 * 60 * 24,
        signed: true,
      })
      .json({
        message: "user logged in",
        token: token,
      });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
}

export default logUserIn;
