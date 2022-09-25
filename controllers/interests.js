import Responses from "../util/response";

async function getAllInterests(req, res, next) {
  try {
    const { interests } = req.models;
    const allInterests = await interests.findAll({});
    return Responses.success(
      res,
      "get all interests successfully",
      allInterests
    );
  } catch (err) {
    next(err);
  }
}
async function addInterestsUser(req, res, next) {
  const { userId } = req.userId;
  const { user } = req.models;
  const { interests } = req.body;
  const response = await this.user.update({
    where: {
      userId: userId,
    },
    data: {
      interests: interests,
    },
  });
  return Responses.success(
    res,
    "add interests to users successfully",
    response
  );
}
async function addInterests(req, res, next) {
  const { interests } = req.models;
  const { interest } = req.body;
  console.log(interest);
  const response = await this.interests.create({
    data: {
      interests: interest,
    },
  });
  return Responses.success(
    res,
    "add interests to users successfully",
    response
  );
}
export default { getAllInterests, addInterestsUser, addInterests };
