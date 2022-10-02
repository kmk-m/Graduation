import passport from "passport";
import jwt from "jsonwebtoken";
import Responses from "./response";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
function authenticateWithJWT(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
}
function authadmin(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;
    if (data.role !== "admin") {
      return Responses.forbidden(
        res,
        "Forbeddin",
        "Tou canot access this page"
      );
    }
    return next();
  } catch {
    return res.sendStatus(403);
  }
}
function authgoogle(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendFile(path.join(__dirname + "/../views/html/google.html"));
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;

    return next();
  } catch {
    return res.sendFile(path.join(__dirname + "/../views/html/google.html"));
  }
}

export default {
  authadmin,
  authenticateWithJWT,
  authgoogle,
};
