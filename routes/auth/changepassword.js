import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();

router.get("/changepassword/:id", (req, res) => {
  res.sendFile(
    path.join(__dirname + "../../../views/html/changepassword.html")
  );
});
router.post("/changepassword/:id", logincontrol.changepassword);

export default router;
