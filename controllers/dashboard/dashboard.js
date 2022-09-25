import Responses from "../../util/response.js";
async function dahsboard(req, res) {
  const { user, motivation_videos, Hackathons, userHackthons, Tracks } =
    req.models;
  console.log(req.userRole);
  const User = await user.findOne({
    where: {
      userId: req.userId,
    },
    attributes: ["firstName", "lastName", "image"],
  });
  const videos = await motivation_videos.findAll({
    attributes: ["video", "comment"],
  });

  const hackathons = await Hackathons.findAll({
    where: {
      finished: 0,
    },
    attributes: ["name", "date", "round", "hackthonId"],
  });

  const userhackthons = await userHackthons.findAll({
    attributes: ["hackthonId"],
  });
  const tracks = await Tracks.findAll({
    attributes: ["name", "trackId"],
  });
  return Responses.success(res, "data", {
    User,
    videos,
    hackathons,
    userhackthons,
    tracks,
  });
}

export default dahsboard;
