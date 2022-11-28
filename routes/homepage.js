import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import dashboard from "../controllers/dashboard/dashboard.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import multer from "multer";

import comment from "../controllers/dashboard/comment.js";
import replay from "../controllers/dashboard/replay.js";

import likes from "../controllers/dashboard/likes.js";
import getPost from "../controllers/dashboard/getPost.js";
import addFriend from "../controllers/dashboard/addFriend.js";
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("jlkjkljkljk", file);

    cb(null, __dirname + "../../../videos");
  },
  filename: (req, file, cb) => {
    console.log("jlkjkljkljk", file);

    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
const filefilter = (req, file, cb) => {
  console.log("jlkjkljkljk", file);
  if (file.mimetype !== "video/mp4") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
router.use(
  multer({ storage: fileStorage, fileFilter: filefilter }).single("video")
);
router.get("/", (req, res) => {
  // PythonShell.run("./search.py", null, function (err) {
  //   if (err) throw err;
  //   console.log("finished");
  // // });
  // let dataTosend;
  // const python = spawn("python3", ["./search.py"]);
  // python.stdout.on("data", function (data) {
  //   dataTosend = data.toString();
  // });
  // python.stderr.on("data", function (data) {
  //   console.error(`stderr: ${data}`);
  // });
  // python.on("exit", (code) => {
  //   console.log(`child process ${code}, ${dataTosend}`);
  // });
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get dashboard page"
  /* #swagger.responses[200] = {
            description: 'page opened',
    } */
  /* #swagger.responses[400] = {
            description: 'User  not login',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
  res.sendFile(path.join(__dirname + "/../views/html/homepage.html"));
});

router.get("/data", dashboard, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get dashboard data"
  /* #swagger.responses[200] = {
            description: 'data of dashboard',
            schema: {
                "code": "200",
                "message": "data",
                "data": {"User":{
                  "firstName": "string",
                  "lastName": "string",
                  "image": "string",
                },
                "videos":[
                  {
                    "video": "string",
                    "comment": "string"
                  }
                ],
                "hackathons":[
                  {
                    "name": "string",
                    "type": "string",
                    "date": "date"
                  }
                ],
              }
            }
    } */
});
// router.get("/:postId", (req, res) => {
//   // PythonShell.run("./search.py", null, function (err) {
//   //   if (err) throw err;
//   //   console.log("finished");
//   // // });
//   // let dataTosend;
//   // const python = spawn("python3", ["./search.py"]);
//   // python.stdout.on("data", function (data) {
//   //   dataTosend = data.toString();
//   // });
//   // python.stderr.on("data", function (data) {
//   //   console.error(`stderr: ${data}`);
//   // });
//   // python.on("exit", (code) => {
//   //   console.log(`child process ${code}, ${dataTosend}`);
//   // });
//   // #swagger.tags = ['HomePage']
//   // #swagger.description = "to get dashboard page"
//   // /* #swagger.responses[200] = {
//   // description: 'page opened',
//   // } */
//   /* #swagger.responses[400] = {
//             description: 'User  not login',
//             schema: {
//                 "code": "403",
//                 "message": "You cannot access this page before login",
//             }
//     } */
//   console.log(3);

//   res.sendFile(path.join(__dirname + "/../views/html/dashboard.html"));
// });
router.get("/post/:postId", getPost.getPost, (req, res) => {
  // PythonShell.run("./search.py", null, function (err) {
  //   if (err) throw err;
  //   console.log("finished");
  // // });
  // let dataTosend;
  // const python = spawn("python3", ["./search.py"]);
  // python.stdout.on("data", function (data) {
  //   dataTosend = data.toString();
  // });
  // python.stderr.on("data", function (data) {
  //   console.error(`stderr: ${data}`);
  // });
  // python.on("exit", (code) => {
  //   console.log(`child process ${code}, ${dataTosend}`);
  // });
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get dashboard page"
  // /* #swagger.responses[200] = {
  // description: 'page opened',
  // } */
  /* #swagger.responses[400] = {
            description: 'User  not login',
            schema: {
                "code": "403",
                "message": "You cannot access this page before login",
            }
    } */
});
router.post("/addFriend/:friendId", addFriend);
router.get("/comments/:postId", comment.getComments, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get comment"
  /*  #swagger.parameters['Comments'] = {
            in: 'query',
            description: 'numberOfCommentsNow...',
          
    } */
});
router.get("/posts", getPost.getPosts, (req, res) => {
  console.log(2);

  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get posts"
  /*  #swagger.parameters['posts'] = {
            in: 'query',
            description: 'numberOfPostsNow...',
          
    } */
});

router.post("/comment/addComment", comment.addcomment, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to add comment"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'addcomment',
                schema: {
                    "comment": "string",
                    "postId": "string",
                }
        } */
});
router.patch("/comment/:commentId", comment.editcomment, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to edit comment"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'addcomment',
                schema: {
                    "comment": "string",
                }
        } */
});
router.post("/replay/addReplay", replay.addReplay, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to add comment"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'addcomment',
                schema: {
                    "comment": "string",
                    "postId": "string",
                }
        } */
});
router.get("/replay/:commentId", replay.getReplay, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to get comment"
  /*  #swagger.parameters['replays'] = {
            in: 'query',
            description: 'numberOfReplaysNow...',
          
    } */
});
router.patch("/replay/:replayId", replay.editReplay, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to edit comment"
  /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'addcomment',
                schema: {
                    "comment": "string",
                }
        } */
});
router.post("/likePost/:postId", likes.addLikePost, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to add like to post"
});

router.post("/likeComment/:commentId", likes.addLikeComment, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to add like to comment"
});
router.delete("/comment/:commentId", comment.deleteComment, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to delete comment"
});

router.delete("/likePost/:postId", likes.deleteLikePost, (req, res) => {
  // #swagger.tags = ['HomePage']
  // #swagger.description = "to delete like from post"
});

router.delete(
  "/likeComment/:commentId",
  likes.deleteLikeComment,
  (req, res) => {
    // #swagger.tags = ['HomePage']
    // #swagger.description = "to delete like  comment"
  }
);

export default router;
