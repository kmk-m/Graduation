import Router from "express";
import login from "./auth/login.js";
import homepage from "./auth/homepage.js";
import signup from "./auth/register.js";
import forgetpassword from "./auth/forgetpassword";
import changepassword from "./auth/changepassword";
import verifychangepassword from "./auth/verifychangepassword";
import verifyemail from "./auth/verifyemail";
import google from "./auth/google";
import facebook from "./auth/facebook";
import dashboard from "./dashboard/dashboard";
import admin from "./admin/admin";
import jwt from "../util/jwt.js";
import Tracks from "./Tracks";
//*** Swagger ***/
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger_output.json" assert { type: "json" };

const router = Router();
router.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/", homepage);
router.use("/", login);
router.use("/", signup);
router.use("/signin", forgetpassword);
router.use("/signin", changepassword);
router.use("/signin/verifycode", verifychangepassword);
router.use("/signup/verifyemail", verifyemail);
router.use("/", google);
router.use("/", facebook);
router.use("/admin", jwt.authadmin, admin);
router.use("/", jwt.authenticateWithJWT, dashboard);
router.use("/Tracks", jwt.authenticateWithJWT, Tracks);
export default router;
