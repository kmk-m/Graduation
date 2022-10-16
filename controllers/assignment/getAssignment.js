import Responses from "../../util/response.js";

async function getAssignments(req, res, next) {
  const { Assignments, userAssignments, user, Tracks } = req.models;
  const { assignmentId } = req.params;
  const assignments = await userAssignments.findOne({
    where: {
      id: assignmentId,
    },
    include: {
      model: Assignments,
      attributes: ["name", "details"],
    },
    attributes: ["type", "updatedAt", "solution"],
  });
  return Responses.success(res, "Get all Assignments Successfully", {
    assignments,
  });
}
export default getAssignments;
