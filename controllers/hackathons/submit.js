import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;
import Joi from "joi";

const validateBody = (body) => {
  const objectSchema = Joi.object({
    solution: Joi.string()
      .required()
      .trim()
      .pattern(/^https?\:\/\/(www\.)?github\.[a-z]+/)
      .message({
        "string.empty": "solution canot be empty",
        any: `link not github repo`,
      }),
  });
  return objectSchema.validate(body, { abortEarly: true });
};
async function submit(req, res, next) {
  let now = new Date();
  now.setHours(now.getHours() + 2);
  const { Hackathons, user, userHackthons } = req.models;
  const { hackthonId } = req.params;
  const solution = validateBody(req.body);
  console.log(solution);
  if (solution.error) {
    return Responses.badRequest(
      res,
      "ValidationError",
      solution.error.details[0].message
    );
  }
  const valid = await Hackathons.findOne({
    where: {
      hackthonId: hackthonId,
    },
    attributes: ["date"],
  });
  const validHackthon = await userHackthons.findOne({
    where: {
      hackthonId: hackthonId,
      userId: req.userId,
    },
    attributes: ["id"],
  });
  console.log("fgfgd", valid);
  if (!valid) {
    return Responses.forbidden(res, "Hackathon not found", null);
  }
  if (!validHackthon) {
    if (valid.dataValues.date < now) {
      const userHackathon = await userHackthons.create({
        userId: req.userId,
        hackthonId: hackthonId,
        solution: solution.value.solution,
      });
      return Responses.success(res, "submit successfully", null);
    } else {
      return Responses.forbidden(res, "you nedd to register", null);
    }
  }
  const userHackathon = await userHackthons.update(
    {
      solution: solution.value.solution,
      status: !validHackthon ? "SUBMITED" : "PENDING",
    },
    {
      where: {
        userId: req.userId,
        hackthonId: hackthonId,
      },
    }
  );

  return Responses.success(res, "submit successfully", null);
}
export default submit;
