import { Router } from "express";
import logincontrol from "../../controllers/login/logincontrol.js";
const router = Router();

router.post("/:id", logincontrol.verifyemail);

export default router;
