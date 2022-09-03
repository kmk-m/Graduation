import passport from "passport";
import jwt from "jsonwebtoken";
import Responses from "./response";
function authenticateWithJWT(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return Responses.forbidden(res, "you canot access this page before login");
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;
    return next();
  } catch {
    return Responses.forbidden(res, "you canot access this page before login");
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
export default {
  authadmin,
  authenticateWithJWT,
};
