import Responses from "../util/response.js";

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
  try {
    const userId = req.userId;
    const { userInterests } = req.models;
    const { interest } = req.body;
    console.log(interest);
    console.log(userId);
    const response = await userInterests.create({
      interestId: interest,
      userId: userId,
    });
    console.log(response);
    return Responses.success(
      res,
      "add interests to users successfully",
      response
    );
  } catch (err) {
    next(err);
  }
}
async function addInterests(req, res, next) {
  try {
    const { interests } = req.models;
    const { interest } = req.body;
    const existInterest = await interests.find({
      where: {
        name: interest,
      },
    });
    if (existInterest) {
      return Responses.badRequest(res, "this interest already Exist", null);
    }
    const response = await interests.create({
      name: interest,
    });
    return Responses.success(
      res,
      "add interests to users successfully",
      response
    );
  } catch (err) {
    next(err);
  }
}
export default { getAllInterests, addInterestsUser, addInterests };
