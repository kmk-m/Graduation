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
// const filefilter = (req, file, cb) => {
//   if (file.mimetype !== "image/png" && file.mimetype !== "image/jpg") {
//     cb(null, false);
//   } else {
//     cb(null, true);
//   }
// };
const upload = multer({ storage: fileStorage });

//********** */

router.post(
  "/addComment/:commentId",
  upload.single("video"),
  admincontrol.addCommentImage
);
router.post(
  "/addReplay/:replayId",
  upload.single("video"),
  admincontrol.addReplayImage
);
router.post("/addPost/:postId", upload.single("video"), admincontrol.addPost);
export default router;
