import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import Responses from "../../util/response";
import bcrypt from "bcrypt";

async function signingoogle(req, res, next) {
  try {
    const { user } = req.models;

    const existingUser = await user.findOne({
      where: { email: req.user.email },
    });
    // if user exists return the user
    if (existingUser) {
      return Responses.success(res, "sign in", existingUser);
    }
    const hashPassword = await bcrypt.hash("google", 10);
    const User = await user.create({
      firstName: req.user.given_name,
      lastName: req.user.family_name,
      email: req.user.email,
      password: hashPassword,
      emailVerified: true,
    });
    return Responses.success(res, "Signup Succesfully", User);
  } catch (error) {
    return next(error);
  }
}

export default signingoogle;
