import Responses from "../../util/response.js";

async function getIntroVideo(req, res, next) {
  const { Projects, userProjects } = req.models;
  const { courseId } = req.params;

  const Requirements = await Projects.findOne({
    where: {
      courseId,
    },
    attributes: ["projectId", "requirement", "name"],
  });
  if (!Requirements) {
    return Responses.badRequest(res, "course not found");
  }
  const lastSubmission = await userProjects.findOne({
    where: {
      userId: req.userId,
      projectId: Requirements.projectId,
    },
    attributes: ["status", "Comment"],
  });
  return Responses.success(res, "Get data Successfully", {
    Requirements,
    lastSubmission,
  });
}
export default getIntroVideo;
