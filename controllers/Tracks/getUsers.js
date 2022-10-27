import sequelize from "sequelize";
import Response from "../../util/response.js";
async function introVideo(req, res, next) {
  const { user, userRates, Tracks } = req.models;
  const { trackId } = req.params;
  const allUsers = await userRates.findAll({
    where: {
      trackId: trackId,
    },
    offset: parseInt(req.query.users),
    limit: 3,
    include: [
      {
        model: user,
        attributes: ["firstName", "lastName", "image"],
      },
    ],
    attributes: ["rate", "title", "details", "createdAt"],
    // attributes: ["rate"],
  });

  return Response.success(res, "get Data Successfully", allUsers);
}
export default introVideo;
