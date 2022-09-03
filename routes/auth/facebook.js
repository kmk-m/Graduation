import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
import passport from "passport";
const router = Router();

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  logincontrol.facebook
);
export default router;
