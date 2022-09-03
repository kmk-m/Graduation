import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import dashboard from "../../controllers/dashboard/dashboard.js";
import passport from "passport";
import { userInfo } from "os";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // #swagger.tags = ['dashboard']
  // #swagger.description = "to get dashboard page"
  /* #swagger.responses[200] = {
            description: 'page opened',
    } */
  /* #swagger.responses[400] = {
            description: 'User  not login',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
  res.sendFile(path.join(__dirname + "../../../views/html/dashboard.html"));
});
router.get("/dashboard", dashboard, (req, res) => {
  // #swagger.tags = ['dashboard']
  // #swagger.description = "to get dashboard data"
  /* #swagger.responses[200] = {
            description: 'data of dashboard',
            schema: {
                "code": "200",
                "message": "data",
                "data": {"User":{
                  "firstName": "string",
                  "lastName": "string",
                  "image": "string",
                },
                "videos":[
                  {
                    "video": "string",
                    "comment": "string"
                  }
                ],
                "hackathons":[
                  {
                    "name": "string",
                    "type": "string",
                    "date": "date"
                  }
                ],
              }
            }
    } */
});
export default router;
