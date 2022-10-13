import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import examcontroller from "../controllers/Exam/examcontroller.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:examId/data", examcontroller.getExam, (req, res) => {
  // #swagger.tags = ['Exam']
  // #swagger.description = "to get Exam Data"
});
router.get("/:examId", (req, res) => {
  // #swagger.tags = ['Exam']
  // #swagger.description = "to get Exam page"
  res.sendFile(path.join(__dirname + "../../views/html/exam.html"));
});

router.post("/:examId", (req, res) => {
  // #swagger.tags = ['Exam']
  // #swagger.description = "to get Exam page"
  res.sendFile(path.join(__dirname + "../../views/html/exam.html"));
});

export default router;
