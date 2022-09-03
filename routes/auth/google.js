import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
import passport from "passport";
import GoogleStratgy from "passport-google-oauth2";
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
export default router;
