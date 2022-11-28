import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import interests from "../controllers/interests.js";
import jwt from "../util/jwt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // #swagger.tags = ['Interests']
  // #swagger.description = "to get Interests page"
  // #swagger.request = "http://127.0.0.1:3000/Interests"
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
  res.sendFile(path.join(__dirname + "../../views/html/interests.html"));
});

router.get("/data", interests.getAllInterests, (req, res) => {
  // #swagger.tags = ['Interests']
  // #swagger.description = "to get Tracks page"
  // #swagger.request = "http://127.0.0.1:3000/Interests/data"
  /* #swagger.responses[200] = {
            description: 'Get data sucessfully',
            schema: {
                "code": "200",
                "message": "data",
                "data": {
                "interests":[
                  {
                    "id" : "name",
                    "name": "string"
                  }
                ]
              }
            }

        } */
  /* #swagger.responses[400] = {
            description: 'User  not found',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
});
router.post(
  "/user",
  //jwt.authenticateWithJWT,
  interests.addInterestsUser,
  (req, res) => {
    // #swagger.tags = ['Interests']
    // #swagger.description = "to get Tracks page"
    // #swagger.request = "http://127.0.0.1:3000/Interests/user"
  }
);
router.post("/", jwt.authadmin, interests.addInterests, (req, res) => {
  // #swagger.tags = ['Interests']
  // #swagger.description = "to add Interests"
  // #swagger.request = "http://127.0.0.1:3000/Interests/"
});
export default router;
