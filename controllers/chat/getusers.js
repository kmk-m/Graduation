import Responses from "../../util/response";
async function getAllUsers(req, res, next) {
  try {
    const { user, messages, allMessages } = req.models;
    const User = await user.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["userId", "firstName", "lastName", "image", "bio"],
    });
    const Friends = await messages.findAll({
      where: {
        senderId: req.userId,
      },
      include: [
        {
          model: user,
          attributes: ["userId", "firstName", "lastName", "image"],
        },
        {
          model: allMessages,
          attributes: ["contant", "createdAt"],
        },
      ],
      attributes: ["id"],
    });
    return Responses.success(res, "Get data Successfully ", {
      User,
      Friends,
    });
  } catch (err) {
    return next(err);
  }
}
export default getAllUsers;
