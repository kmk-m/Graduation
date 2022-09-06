import e from "express";
import Response from "../util/response.js";
async function getdata(req, res, next) {
  const { user, userTracks, trackCourses, userCourses, Tracks, Courses } =
    req.models;
  const { trackId } = req.params;
  const User = await user.findOne({
    where: {
      userId: req.userId,
    },
    attributes: ["firstName", "lastName", "image"],
  });
  const cretificate = await userTracks.findOne({
    where: {
      userId: req.userId,
      trackId: trackId,
    },
    attributes: ["status"],
  });
  let TrackCourses = await trackCourses.findAll({
    where: {
      trackId: trackId,
    },
    attributes: ["courseId"],
  });
  let courses = [];

  const track = await Tracks.findOne({
    where: {
      trackId: trackId,
    },
    attributes: ["image", "introVideo", "name", "courseId"],
  });
  for (let i = 0; i < TrackCourses.length; i += 1) {
    let UserCourses = await userCourses.findOne({
      where: {
        courseId: TrackCourses[i].courseId,
        userId: req.userId,
      },
    });
    courses.push(
      await Courses.findOne({
        where: {
          courseId: TrackCourses[i].courseId,
        },
        attributes: [
          "image",
          "coursePlan",
          "introVideo",
          "description",
          "duration",
          "instructor",
          "language",
          "allow",
        ],
      })
    );
    if (UserCourses && UserCourses.dataValues.status === "Done") {
      courses[i].allow = true;
    }
    if (UserCourses && courses[i].courseId === track.courseId) {
      courses[i].allow = true;
    }
  }

  return Response.success(res, "Get data successfully", {
    User,
    cretificate,
    track,
    courses,
  });
}
export default getdata;
