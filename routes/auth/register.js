import Router from "express";
import path from "path";
import { fileURLToPath } from "url";
import login from "../../controllers/login/logincontrol.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();
router.get("/signup", (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendFile(
      path.join(__dirname + "/../../views/html/register.html")
    );
  }
  try {
    return res.sendFile(
      path.join(__dirname + "/../../views/html/alreadyLogin.html")
    );

    return next();
  } catch {
    return res.sendFile(
      path.join(__dirname + "/../../views/html/register.html")
    );
  }
});
router.post("/signup", login.signup);
export default router;
