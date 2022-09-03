import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Responses from "../../util/response";
async function login(req, res, next) {
  try {
    const { user } = req.models;

    const { email, password } = req.body;
    if (!email) {
      return Responses.badRequest(res, "400", " email cannt be empty ");
    }
    if (!password) {
      return Responses.badRequest(res, "400", " password cannt be empty ");
    }
    const newuser = await user.findOne({ where: { email } });

    if (newuser === null) {
      return Responses.badRequest(res, "400", " user not found ");
    }

    const checkpassword = await bcrypt.compare(password, newuser.password);

    if (!checkpassword) {
      return Responses.badRequest(
        res,
        "InvalidCredentials",
        "Email or password is incorrect"
      );
    }

    if (!newuser.emailVerified) {
      return Responses.forbidden(
        res,
        "Email not verifird",
        "Email not verified"
      );
    }
    const token = jwt.sign(
      { userId: newuser.userId, role: newuser.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.cookie("access_token", token); //Sets name = express

    return Responses.success(res, "logged in Successfully", {
      role: user.role,
    });
  } catch (err) {
    return next(err);
  }
}
export default login;
