import Responses from "../../util/response";

async function changes(req, res, next) {
  const { userAssignments } = req.models;
  const { assignmentId } = req.params;
  const assignments = await userAssignments.update(
    { type: "Changes" },
    {
      where: {
        id: assignmentId,
      },
    }
  );
  return Responses.success(res, "Get all Assignments Successfully", {
    assignments,
  });
}
export default changes;
