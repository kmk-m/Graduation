import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import courseController from "../controllers/courses/courseController.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:courseId/finalProject", (req, res) => {
  // #swagger.tags = ['courses']
  // #swagger.description = "to get coursess page"
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
  res.sendFile(path.join(__dirname + "../../views/html/finalProject.html"));
});
router.get(
  "/:courseId/finalProject/data",
  courseController.getIntroVideo,
  (req, res) => {
    // #swagger.tags = ['courses']
    // #swagger.description = "to get coursess page"
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
  }
);
router.post("/:projectId", courseController.submitProject, (req, res) => {
  // #swagger.tags = ['courses']
  // #swagger.description = "to submitProject"
  // #swagger.request = "https://sleepy-bastion-99766.herokuapp.com/courses/courseId"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'addproject',
                schema: {
                    "link": "string",
                }
        } */
});
export default router;
