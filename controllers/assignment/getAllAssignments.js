import Responses from "../../util/response";

async function getAllAssignments(req, res, next) {
  const { Assignments, userAssignments, user, Tracks } = req.models;
  const { id } = req.params;
  const assignments = await userAssignments.findAll({
    where: {
      userId: req.userId,
      trackId: id,
    },
    include: {
      model: Assignments,
      attributes: ["name"],
      model: Tracks,
      attributes: ["name"],
    },
    attributes: ["type", "updatedAt"],
  });
  const User = await user.findOne({
    where: {
      userId: req.userId,
    },
    attributes: ["firstName", "lastName", "image"],
  });
  let track = assignments[0].dataValues.Track.dataValues.name;
  console.log(track);
  for (let i = 0; i < assignments.length; i++) {
    delete assignments[0].dataValues.Track;
  }

  return Responses.success(res, "Get all Assignments Successfully", {
    User,
    track,
    assignments,
  });
}
export default getAllAssignments;
