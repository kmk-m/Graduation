import Responses from "../../util/response";
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

async function addAssignment(req, res, next) {
  const { userAssignments } = req.models;
  const { assignmentId } = req.params;
  console.log(req.body);
  const solution = validateBody(req.body);
  console.log(solution);
  if (solution.error) {
    return Responses.badRequest(
      res,
      "ValidationError",
      solution.error.details[0].message
    );
  }
  console.log(solution.value.solution);
  const assignments = await userAssignments.update(
    { type: "Pending", solution: solution.value.solution },
    {
      where: {
        id: assignmentId,
      },
    }
  );
  return Responses.success(
    res,
    "add assignment successfully",
    req.body.solution
  );
}
export default addAssignment;
