import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import connection from "./util/connection.js";
import cookieParser from "cookie-parser";
import SetupModels from "./models/setupmodels.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import Cors from "cors";
import passport from "passport";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google-oauth2";
import jwt from "./util/jwt.js";
import { createServer } from "http";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import { Strategy } from "passport-jwt";
import APIRouter from "./routes/APIRouter.js";
dotenv.config();
const app = express();

app.use(Cors());

try {
  await SetupModels(connection);
  await connection.authenticate();
  await connection.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(async (req, res, next) => {
  req.models = connection.models;
  req.jwt = jwt;
  next();
});
app.use(cookieParser());
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views/html"));
app.use(express.static(__dirname + "/views/javascript"));
app.use(express.static(__dirname + "/videos"));
app.use(express.static(__dirname + "/audios"));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(morgan("dev"));
app.use("/", APIRouter);
app.use("/assets", express.static("assets"));
app.use(multer({ dest: "videos/" }).single("file"));

/******Google******/
app.post;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
/******facebook***/
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "emails", "name", "displayName", "photos"],
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

const httpServer = createServer(app);
const io = new Server(httpServer);
const { messages } = "./models/messages.js";
import { PythonShell } from "python-shell";

/********************* */
httpServer.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

io.on("connection", function (socket) {
  console.log("User connected", socket.id);
  socket.on(`message`, (msg) => {
    console.log(msg.user);
    connection.models.allMessages.create({
      usersId: msg.user,
      contant: msg.message,
      createdAt: Date.now(),
      read: true,
      sender: true,
    });
    console.log(msg);
    socket.broadcast.emit("message", msg);
  });
});
