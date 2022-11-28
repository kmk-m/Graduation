import sequelize from "sequelize";
import Responses from "../../util/response.js";
async function addFriend(req, res, next) {
  try {
    const { userFriends, user } = req.models;
    const { friendId } = req.params;
    console.log("jjkjkjk", req.userId, friendId);
    const valid = await user.findOne({
      where: {
        userId: friendId,
      },
    });
    if (!valid) {
      return Responses.badRequest(res, "User not found", "User not found");
    }
    await userFriends.create({
      userId: req.userId,
      friendId: friendId,
    });
    return Responses.success(res, "friend Add Successfully", null);
  } catch (err) {
    next(err);
  }
}

export default addFriend;
