import Router from "express";
const router = Router();
import path from "path";
import { fileURLToPath } from "url";
import dashboard from "../controllers/dashboard/dashboard.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import comment from "../controllers/dashboard/comment";
import likes from "../controllers/dashboard/likes";
import { PythonShell } from "python-shell";
import { spawn } from "child_process";
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
  res.sendFile(path.join(__dirname + "/../views/html/dashboard.html"));
});
router.get("/dashboard", dashboard, (req, res) => {
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
router.post("/comment", comment.addcomment, (req, res) => {
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
