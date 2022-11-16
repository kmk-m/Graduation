import Router from "express";
import path from "path";
import { fileURLToPath } from "url";
import login from "../../controllers/login/logincontrol.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();
router.get("/", (req, res) => {
  console.log("signup");
  res.sendFile(path.join(__dirname + "../../../views/html/signup.html"));
});
router.post("/", login.signup);
export default router;
