import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

router.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../views/html/verify.html"));
});
router.post("/:userId", logincontrol.verifychangepassword);

export default router;
