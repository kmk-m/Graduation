import Responses from "../../util/response.js";

async function getIntroVideo(req, res, next) {
  try {
    const { userProjects, Projects } = req.models;
    const { projectId } = req.params;
    const { link } = req.body;
    const Requirements = await Projects.findOne({
      where: {
        projectId: projectId,
      },
      attributes: ["projectId", "requirement", "name"],
    });
    if (!Requirements) {
      return Responses.badRequest(res, "Project not found");
    }
    const { name } = Requirements.name;
    console.log(name);
    console.log(Requirements);
    const Submission = await userProjects.create({
      userId: req.userId,
      projectId: projectId,
      name: Requirements.name,
      description: Requirements.requirement,
      link: link,
      status: "Pending",
    });
    return Responses.success(res, "submit Successfully", null);
  } catch (err) {
    next(err);
  }
}
export default getIntroVideo;
