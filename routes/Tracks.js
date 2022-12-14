import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import tracksController from "../controllers/Tracks/tracksController.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:trackId", (req, res) => {
  // #swagger.tags = ['Tracks']
  // #swagger.description = "to get Tracks page"
  // #swagger.request = "http://127.0.0.1:3000/Tracks"
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
  res.sendFile(path.join(__dirname + "../../views/html/tracks.html"));
});
router.get("/:trackId/introVideo", (req, res) => {
  // #swagger.tags = ['Tracks']
  // #swagger.description = "to get introVideo page"
  res.sendFile(path.join(__dirname + "../../views/html/introVideo.html"));
});
router.get("/data/:trackId", tracksController.tracks, (req, res) => {
  // #swagger.tags = ['Tracks']
  // #swagger.description = "to get Tracks data"
  /* #swagger.responses[200] = {
            description: 'data of Tracks',
            schema: {
                "code": "200",
                "message": "data",
                "data": {"User":{
                  "firstName": "string",
                  "lastName": "string",
                  "image": "string",
                },
                "track":
                  {
                    "image": "string",
                    "introVideo": "string",
                    "name": "string"
                  }
                ,
                "courses":[
                  {
                    "image": "string",
                    "introVideo": "string",
                    "description": "date",
                    "duration": "string",
                    "instructor": "string",
                    "language": "string",
                     "allow": "boolen",
                  }
                ],
              }
            }
    } */
  /* #swagger.responses[400] = {
            description: 'Track  not found',
            schema: {
                "code": "400",
                "message": "Track not found",
            }
    } */
});

router.get(
  "/:trackId/introVideo/getUsers",
  tracksController.getUsers,
  (req, res) => {
    // #swagger.tags = ['Tracks']
    // #swagger.description = "to get Users"
    /*  #swagger.parameters['users'] = {
            in: 'query',
            description: 'numberOfUsersNow...',
          
    } */
  }
);

router.get(
  "/:trackId/introVideo/data",
  tracksController.getIntroVideo,
  (req, res) => {
    // #swagger.tags = ['Tracks']
    // #swagger.description = "to get introVideo Details"
  }
);
export default router;
