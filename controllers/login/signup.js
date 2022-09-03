import Joi from "joi";
import joipassword, { joiPassword } from "joi-password";
import response from "../../util/response.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as speakeasy from "speakeasy";
import hbs from "nodemailer-express-handlebars";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const validateBody = (body) => {
  const objectSchema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .max(32)
      .required()
      .trim()
      .pattern(/^[a-zA-Z\s]*$/)
      .message({
        "string.empty": "firstname cannot be empty",
        "string.min":
          "firstname length must be equal or higher than 3 characters",
        "string.max": "firstname length not exceed 32 characters",
      }),
    lastName: Joi.string()
      .min(3)
      .max(32)
      .required()
      .trim()
      .pattern(/^[a-zA-Z\s]*$/)
      .message({
        "string.empty": "lastname cannot be empty",
        "string.min":
          "lastname length must be equal or higher than 3 characters",
        "string.max": "lastname length not exceed 32 characters",
      }),
    email: Joi.string().trim().email().required().messages({
      "string.empty": `email cannot be empty`,
      "string.email": `email must be a valid email address`,
      "any.required": `email is a required field`,
    }),
    password: joiPassword
      .string()
      .min(8)
      .max(32)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .messages({
        "string.empty": `password cannot be empty`,
        "string.min": `password length must be equal or higher than {#limit} characters`,
        "string.max": `password length must not exceed {#limit} characters`,
        "any.required": `password is a required field`,
        "string.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "string.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "string.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "string.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
    confirmpassword: joiPassword
      .string()
      .min(8)
      .max(32)
      .required()
      .noWhiteSpaces()
      .minOfUppercase(1)
      .minOfLowercase(1)
      .minOfNumeric(1)
      .messages({
        "string.empty": `password cannot be empty`,
        "string.min": `password length must be equal or higher than {#limit} characters`,
        "string.max": `password length must not exceed {#limit} characters`,
        "any.required": `password is a required field`,
        "string.minOfUppercase":
          "{#label} should contain at least {#min} uppercase character",
        "string.minOfLowercase":
          "{#label} should contain at least {#min} lowercase character",
        "string.minOfNumeric":
          "{#label} should contain at least {#min} numeric character",
        "string.noWhiteSpaces": "{#label} should not contain white spaces",
      }),
  });
  return objectSchema.validate(body, { abortEarly: true });
};

async function register(req, res, next) {
  try {
    const { user } = req.models;
    const validateError = validateBody(req.body);
    if (validateError.error) {
      return response.badRequest(
        res,
        "ValidationError",
        validateError.error.details[0].message
      );
    }
    const { firstName, lastName, email, password, confirmpassword } =
      validateError.value;
    const check = await user.findOne({
      where: {
        email,
      },
    });
    if (check) {
      return response.badRequest(
        res,
        "User already Exists",
        "User already Exists"
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = await user.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      emailVerified: 1,
    });
    const accessToken = jwt.sign(
      { userId: newuser.userId, role: newuser.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 2 * 24 * 60 * 60 }
    );
    const refreshToken = jwt.sign(
      { userId: newuser.userId, role: newuser.role, refresh: true },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: 7 * 24 * 60 * 60 }
    );
    delete newuser.dataValues.password;

    // let transporter = nodemailer.createTransport({
    //   host: "smtp.titan.email",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: "noreply@orangedigitalcenteregypt.com",
    //     pass: "AQYpcjBhp3",
    //   },
    // });
    // const otp = speakeasy.totp({
    //   digits: 6,
    //   encoding: "base32",
    //   step: 300,
    // });

    // const handlebarOptions = {
    //   viewEngine: {
    //     partialsDir: path.resolve("./views/"),
    //     defaultLayout: false,
    //   },
    //   viewPath: path.resolve("./views/"),
    // };
    // transporter.use("compile", hbs(handlebarOptions));
    // let info = await transporter.sendMail({
    //   from: "Accept <noreply@orangedigitalcenteregypt.com>",
    //   to: email,
    //   subject: "Email confirmation",
    //   template: "verifyemail",
    //   context: {
    //     name: newuser.firstName + newuser.lastName, // replace {{name}} with Adebola
    //     URL: otp, // replace {{company}} with My Company
    //   },
    // });
    // const { resetcode } = req.models;
    // const userid = newuser.userId;
    // await resetcode.create({
    //   code: otp,
    //   userId: userid,
    // });
    // return response.success(
    //   res,
    //   "please Verify Your email to continue",
    //   "please Verify Your email to continue"
    // );
  } catch (err) {
    return next(err);
  }
}
export default register;
