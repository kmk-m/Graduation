import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
import passport from "passport";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
import Responses from "../../util/response.js";

const __dirname = path.dirname(__filename);
router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  logincontrol.facebook
);
router.get("/loginFacebook/:token", logincontrol.loginFacebook);
router.get("/facebook2/:token", (req, res) => {
  return res.sendFile(
    path.join(__dirname + "../../../views/html/facebook.html")
  );
});
export default router;
