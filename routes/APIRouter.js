import Router from "express";
import login from "./auth/login.js";
import homepage from "./homepage.js";
import signup from "./auth/register.js";
import forgetpassword from "./auth/forgetpassword.js";
import changepassword from "./auth/changepassword.js";
import verifychangepassword from "./auth/verifychangepassword.js";
import verifyemail from "./auth/verifyemail.js";
import google from "./auth/google.js";
import facebook from "./auth/facebook.js";
import admin from "./admin/admin.js";
import jwt from "../util/jwt.js";
import Tracks from "./Tracks.js";
import assignment from "./assignment.js";
import experience from "./experience.js";
import chat from "./chat.js";
import courses from "./courses.js";
import exam from "./exam.js";
import room from "./room.js";
import hackathons from "./hackathon.js";
import welcome from "./welcome.js";
import check from "./check.js";
import logout from "./logout.js";

//*** Swagger ***/
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger_output.json" assert { type: "json" };
import interests from "./interests.js";

const router = Router();
router.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
router.use("/exam", exam);

router.use("/", welcome);
router.use("/signin", login);
router.use("/signup", signup);
router.use("/check", jwt.check, check);

router.use("/", assignment);
router.use("/signin", forgetpassword);
router.use("/signin", changepassword);
router.use("/signin/verifycode", verifychangepassword);
router.use("/signup/verifyemail", verifyemail);
router.use("/", google);
router.use("/", facebook);
router.use("/upload", jwt.authenticateWithJWT, admin);
router.use("/homepage", jwt.authenticateWithJWT, homepage);
router.use("/Tracks", jwt.authenticateWithJWT, Tracks);
router.use("/room", jwt.authenticateWithJWT, room);
router.use("/courses", jwt.authenticateWithJWT, courses);
router.use("/interests", jwt.authenticateWithJWT, interests);
router.use("/experience", experience);
router.use("/chat", chat);
router.use("/hackathons", hackathons);
router.use("/logout", logout);

export default router;
