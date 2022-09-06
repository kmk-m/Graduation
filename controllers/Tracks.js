import e from "express";
import Response from "../util/response.js";
async function getdata(req, res, next) {
  const { user, userTracks } = req.models;
  const { trackId } = req.params;
  console.log(req.userId);
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
  return Response.success(res, "Get data successfully", { User, cretificate });
}
export default getdata;
