import Responses from "../util/response.js";

async function getAllInterests(req, res, next) {
  try {
    const { interests } = req.models;
    const valid = await interests.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (valid) {
      return Responses.badRequest(
        res,
        "User already exist",
        "User already exist"
      );
    }
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
    const { interests } = req.body;
    console.log(interests);
    for (let i = 0; i < interests.length; i++) {
      console.log(interests[i]);
      const response = await userInterests.create({
        interestId: interests[i],
        userId: req.userId,
      });
    }
    return Responses.success(
      res,
      "add interests to users successfully",
      "response"
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
    for (let i = 0; i < interest.length; i++) {
      console.log(interest[i]);
      //    const response = await interests.create({
      //    name: interest[i],
      // });
    }
    return Responses.success(res, "add interests to users successfully", "ok");
  } catch (err) {
    next(err);
  }
}
export default { getAllInterests, addInterestsUser, addInterests };
