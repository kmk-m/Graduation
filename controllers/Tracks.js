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
  const valid = await Tracks.findOne({
    where: {
      trackId: trackId,
    },
  });
  if (!valid) {
    return Response.badRequest(res, "track not found", " track not found");
  }
  const cretificate = await userTracks.findOne({
    where: {
      userId: req.userId,
      trackId: trackId,
    },
    attributes: ["status"],
  });
  const TrackCourses = await trackCourses.findAll({
    where: {
      trackId: trackId,
    },
    include: [
      { model: Courses, attributes: ["name", "rating", "instructor", "image"] },
    ],
    attributes: ["id", "show"],
  });
  console.log(trackCourses);
  const track = await Tracks.findOne({
    where: {
      trackId: trackId,
    },
    attributes: ["name", "image"],
  });
  return Response.success(res, "Get data successfully", {
    User,
    cretificate,
    track,
    TrackCourses,
  });
}
export default getdata;
