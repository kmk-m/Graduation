import Responses from "../../util/response.js";

async function getAllAssignments(req, res, next) {
  const { Assignments, userAssignments, user, Tracks } = req.models;
  const { id } = req.params;
  const assignments = await userAssignments.findAll({
    where: {
      userId: req.userId,
      trackId: id,
    },
    include: [{ model: Assignments, attributes: ["name"] }],
    attributes: ["type", "updatedAt", "id"],
  });
  const track = await Tracks.findOne({
    where: {
      trackId: id,
    },
    attributes: ["name"],
  });
  const User = await user.findOne({
    where: {
      userId: req.userId,
    },
    attributes: ["firstName", "lastName", "image"],
  });

  return Responses.success(res, "Get all Assignments Successfully", {
    User,
    track,
    assignments,
  });
}
export default getAllAssignments;
