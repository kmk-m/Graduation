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
});
export default router;
