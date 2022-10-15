import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import assignment from "../controllers/assignment/assignment.controller.js";
import jwt from "../util/jwt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/Tracks/:id/Assignments", (req, res) => {
  // #swagger.tags = ['Assignment']
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
  res.sendFile(path.join(__dirname + "../../views/html/assignment.html"));
});
router.get(
  "/Tracks/:id/Assignments/data",
  jwt.authenticateWithJWT,
  assignment.getAllAssignments,
  (req, res) => {
    // #swagger.tags = ['Assignment']
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
  }
);
router.get(
  "/Assignments/:assignmentId",
  jwt.authenticateWithJWT,
  assignment.getAssignments,
  (req, res) => {
    // #swagger.tags = ['Assignment']
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
  }
);
router.post(
  "/Assignments/:assignmentId",
  jwt.authenticateWithJWT,
  assignment.addAssignment,
  (req, res) => {
    // #swagger.tags = ['Assignment']
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
  }
);

export default router;
