import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function signingoogle(req, res, next) {
  try {
    const { user } = req.models;

    const existingUser = await user.findOne({
      where: { email: req.user.email },
    });
    // if user exists return the user
    if (existingUser) {
      const token = jwt.sign(
        { userId: existingUser.userId, role: existingUser.role },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.cookie("access_token", token); //Sets name = express
      return res.sendFile(
        path.join(__dirname + "../../../views/html/google.html")
      );
    }
    const hashPassword = await bcrypt.hash("google", 10);
    const User = await user.create({
      firstName: req.user.given_name,
      lastName: req.user.family_name,
      email: req.user.email,
      password: hashPassword,
      interest: "frontend",
      emailVerified: 1,
    });

    const token = jwt.sign(
      { userId: User.userId, role: User.role },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.cookie("access_token", token); //Sets name = express

    return res.sendFile(
      path.join(__dirname + "../../../views/html/google.html")
    );

    // return res();
    //  .sendFile
    //  path.join(__dirname + "../../../views/html/google.html")
  } catch (error) {
    return next(error);
  }
}

export default signingoogle;
