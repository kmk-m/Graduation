import Responses from "../../util/response";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import * as speakeasy from "speakeasy";
import hbs from "nodemailer-express-handlebars";
const __filename = fileURLToPath(import.meta.url);

async function forgetpassword(req, res, next) {
  try {
    const { user } = req.models;
    const { email } = req.body;
    const valid = await user.findOne({
      where: {
        email,
      },
    });
    if (!valid) {
      return Responses.badRequest(
        res,
        "Email doesnot exist",
        "Email doesnot exist"
      );
    }
    let transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false,
      auth: {
        user: "noreply@orangedigitalcenteregypt.com",
        pass: "AQYpcjBhp3",
      },
    });
    const otp = speakeasy.totp({
      digits: 6,
      encoding: "base32",
      step: 300,
    });

    const handlebarOptions = {
      viewEngine: {
        partialsDir: path.resolve("./views/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views/"),
    };
    transporter.use("compile", hbs(handlebarOptions));
    let info = await transporter.sendMail({
      from: "Accept <noreply@orangedigitalcenteregypt.com>",
      to: email,
      subject: "Email confirmation",
      template: "resetpassword",
      context: {
        name: valid.firstName + valid.lastName, // replace {{name}} with Adebola
        URL: "http://127.0.0.1:3000/signin/verifycode/:" + valid.userId,
        message: otp, // replace {{company}} with My Company
      },
    });
    const { resetcode } = req.models;
    const userid = valid.userId;
    await resetcode.create({
      code: otp,
      userId: userid,
    });
    const usercode = resetcode.findOne({
      where: {
        userId: userid,
      },
    });
    return Responses.success(res, "code sent to email", usercode);
  } catch (err) {
    return next(err);
  }
}
export default forgetpassword;
