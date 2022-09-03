import { Router } from "express";
import login from "../../controllers/login/logincontrol.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();
router.get("/signin", (req, res) => {
  // #swagger.tags = ['user']
  res.sendFile(path.join(__dirname + "../../../views/html/login.html"));
});

router.post("/signin", login.signin, (req, res) => {
  // #swagger.tags = ['user']
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'sign in body',
                schema: {
                    "email": "string",
                    "password": "string",
                }
        } */
  /* #swagger.responses[200] = {
            description: 'User successfully login.',
            schema: {
                "code": "Success",
                "message": "logged in Successfully",
                "data":{}
            }
    } */
  /* #swagger.responses[400] = {
            description: 'User faild login.',
            schema: {
                "code": "400",
                "message": "Email or Password isnot correct",
            }
    } */
});

export default router;
