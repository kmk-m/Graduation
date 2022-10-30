import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import hackathons from "../controllers/hackathons/hackathonController.js";
import jwt from "../util/jwt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get Hackathons page"
  res.sendFile(path.join(__dirname + "../../views/html/hackathons.html"));
});
router.get(
  "/upCommingHackathons",
  hackathons.upCommingHackathons,
  (req, res) => {
    // #swagger.tags = ['Hackathons']
    // #swagger.description = "to get Hackathons data"
  }
);
router.get("/pastHackathons", hackathons.pastHackathons, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get Hackathons data"
  /*  #swagger.parameters['hachathons'] = {
            in: 'query',
            description: 'numberOfhachathonsNow...',
          
    } */
});
router.get("/:hackathonId/standing", hackathons.getStanding, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get Hackathons data"
  /*  #swagger.parameters['users'] = {
            in: 'query',
            description: 'numberOfusersNow...',
          
    } */
});
router.get("/:hackthonId/users", hackathons.getUsers, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get Hackathons users"
  /*  #swagger.parameters['users'] = {
            in: 'query',
            description: 'numberOfusersNow...',
          
    } */
});
router.get("/:hackthonId/friends", hackathons.getFriends, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get Hackathons friends"
  /*  #swagger.parameters['users'] = {
            in: 'query',
            description: 'numberOfusersNow...',
          
    } */
});
router.post("/:hackthonId/register", hackathons.register, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to registert  to Hackathons"
});
router.get("/:hackathonId", hackathons.getHackathon, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to get data from Hackathon"
});
router.patch("/:hackthonId/submit", hackathons.submit, (req, res) => {
  // #swagger.tags = ['Hackathons']
  // #swagger.description = "to submit"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'submit',
                schema: {
                    "solution": "string",
                }
        } */
});
export default router;
