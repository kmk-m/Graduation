import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import chatController from "../controllers/chat/chatController.js";
import interests from "../controllers/interests.js";
import jwt from "../util/jwt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // #swagger.tags = ['chat']
  // #swagger.description = "to get Interests page"
  /* #swagger.responses[200] = {
            description: 'page opened',
    } */
  /* #swagger.responses[400] = {
            description: 'User  not found',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
  res.sendFile(path.join(__dirname + "../../views/html/chat.html"));
});
router.get("/users", chatController.getAllUsers, (req, res) => {
  // #swagger.tags = ['chat']
  // #swagger.description = "to get user data"
  /* #swagger.responses[200] = {
            description: 'page opened',
    } */
  /* #swagger.responses[400] = {
            description: 'User  not found',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
});
export default router;
