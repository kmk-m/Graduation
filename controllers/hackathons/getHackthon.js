import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function getHackathon(req, res, next) {
  const {
    Hackathons,
    user,
    userHackthons,
    hackathonQuestions,
    hackathonRequirments,
  } = req.models;
  const { hackathonId } = req.params;
  const hackathon = await Hackathons.findOne({
    where: {
      hackthonId: hackathonId,
    },
    include: [
      {
        model: hackathonRequirments,
        attributes: ["content"],
      },
    ],
    attributes: ["name", "round", "link", "type", "date"],
  });
  let now = new Date();
  now.setHours(now.getHours() + 2);
  console.log(hackathon.dataValues, now);
  if (hackathon.dataValues.date > now) {
    return Responses.forbidden(res, "Hackathon Not started yet");
  }
  const questions = await hackathonQuestions.findAll({
    where: {
      hackthonId: hackathonId,
      userId: req.userId,
    },
    attributes: ["question", "answer"],
  });
  console.log(req.userId);
  let submit = await userHackthons.findOne({
    where: {
      hackthonId: hackathonId,
      userId: req.userId,
      standing: {
        [Op.ne]: -1,
      },
    },
    attributes: ["solution", "points"],
  });
  console.log(submit);
  if (!submit.dataValues.solution) submit = "false";
  return Responses.success(res, "Successfully Get Hckathons", {
    hackathon,
    questions,
    submit,
  });
}
export default getHackathon;
