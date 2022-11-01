import passport from "passport";
import jwt from "jsonwebtoken";
import Responses from "./response.js";
import path from "path";
import { fileURLToPath } from "url";
import { PythonShell } from "python-shell";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
async function authenticateWithJWT(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    const { user } = req.models;
    const valid = await user.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (!valid) {
      res.clearCookie("access_token");
      return res.sendFile(
        path.join(__dirname + "/../views/html/notlogin.html")
      );
    }
    let options = {
      args: [req.userId],
    };
    PythonShell.run("search.py", options, function (err, results) {
      return search(results);
    });
    function search(results) {
      // console.log(results);
    }

    PythonShell.run(
      "friends_recommendation.py",
      options,
      function (err, results) {
        return friend(results);
      }
    );
    function friend(results) {
      console.log(results);
    }
    // this.stderr.on("end", function () {
    //   self.stderrHasEnded = true;
    //   terminateIfNeeded();
    // });

    // this.stdout.on("end", function () {
    //   self.stdoutHasEnded = true;
    //   terminateIfNeeded();
    // });

    // this.childProcess.on("exit", function (code) {
    //   self.exitCode = code;
    //   terminateIfNeeded();
    // });
    // PythonShell.run(
    //   "friends_recommendation.py",
    //   options,
    //   function (err, results) {
    //     console.log(results, "finished");
    //   }
    // );
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
}
function authadmin(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;
    if (data.role !== "admin") {
      return Responses.forbidden(
        res,
        "Forbeddin",
        "Tou canot access this page"
      );
    }
    return next();
  } catch {
    return res.sendStatus(403);
  }
}
function authgoogle(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendFile(path.join(__dirname + "/../views/html/google.html"));
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;

    return next();
  } catch {
    return res.sendFile(path.join(__dirname + "/../views/html/google.html"));
  }
}
async function authlogin(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    req.userRole = data.role;

    return next();
  } catch {
    return res.sendFile(path.join(__dirname + "/../views/html/notlogin.html"));
  }
}
export default {
  authadmin,
  authenticateWithJWT,
  authgoogle,
  authlogin,
};
