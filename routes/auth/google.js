import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
import passport from "passport";
import GoogleStratgy from "passport-google-oauth2";
import jwt from "../../util/jwt.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
import Responses from "../../util/response.js";

const __dirname = path.dirname(__filename);
const router = Router();
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
// Retrieve user data using the access token received
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  logincontrol.google
);
router.get("/go/:token", jwt.authgoogle, logincontrol.loginGoogle);
router.get("/loginGoogle/:token", logincontrol.loginGoogle);
router.get("/google2/:token", (req, res) => {
  return res.sendFile(path.join(__dirname + "../../../views/html/google.html"));
});

export default router;
