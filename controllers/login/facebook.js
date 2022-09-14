import Responses from "../../util/response";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
async function facebook(req, res, next) {
  try {
    const { user } = req.models;

    const existingUser = await user.findOne({
      where: { email: req.user.emails[0].value },
    });
    // if user exists return the user
    if (existingUser) {
      const token = jwt.sign(
        { userId: existingUser.userId, role: existingUser.role },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.cookie("access_token", token); //Sets name = express
      return res.sendFile(
        path.join(__dirname + "../../../views/html/dashboard.html")
      );
    }
    const hashPassword = await bcrypt.hash("google", 10);
    const User = await user.create({
      firstName: req.user.name.givenName,
      lastName: req.user.name.familyName,
      email: req.user.emails[0].value,
      password: hashPassword,
      emailVerified: true,
    });
    const token = jwt.sign(
      { userId: existingUser.userId, role: existingUser.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.cookie("access_token", token); //Sets name = express
    return res.sendFile(
      path.join(__dirname + "../../../views/html/dashboard.html")
    );
  } catch (error) {
    return next(error);
  }
}

export default facebook;
