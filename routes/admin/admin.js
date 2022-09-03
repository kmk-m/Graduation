import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import admincontrol from "../../controllers/admin/admincontroller";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//********** */
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../../videos");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
const filefilter = (req, file, cb) => {
  if (file.mimetype !== "video/mp4") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
router.use(
  multer({ storage: fileStorage, fileFilter: filefilter }).single("video")
);
//********** */

router.get("/addvideos", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../views/html/addvideos.html"));
});

router.post("/addvideos", admincontrol.addvideos);

export default router;
