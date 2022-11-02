import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import admincontrol from "../../controllers/uploads/admincontroller.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//********** */
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../../public/uploads/comments");
  },
  filename: (req, file, cb) => {
    let orginFile = file.originalname.split(" ").join("");

    cb(null, new Date().toISOString() + "-" + req.userId + "-" + orginFile);
  },
});
const filefilter = (req, file, cb) => {
  if (file.mimetype !== "image/png" && file.mimetype !== "image/jpg") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
router.use(
  multer({ storage: fileStorage, fileFilter: filefilter }).single("video")
);
//********** */

router.post("/addComment/:commentId", admincontrol.addCommentImage);
router.post("/addReplay/:replayId", admincontrol.addReplayImage);

export default router;
