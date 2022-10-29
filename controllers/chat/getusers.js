import sequelize from "sequelize";
const Op = sequelize.Op;
import Responses from "../../util/response.js";
async function getAllUsers(req, res, next) {
  const { user, messages } = req.models;
  const message = await messages.findAll({
    where: {
      [Op.or]: [{ receiverId: req.userId }, { senderId: req.userId }],
    },
    order: [["createdAt", "DESC"]],

    attributes: ["id", "message", "senderId", "receiverId"],
  });
  console.log(message[0].dataValues);
  const users = [];
  for (let i = 0; i < message.length; i++) {
    const friend = await user.findOne({
      where: {
        userId:
          req.userId !== message[i].dataValues.senderId
            ? message[i].dataValues.senderId
            : message[i].dataValues.receiverId,
      },
      attributes: ["userId", "firstName", "lastName", "image"],
    });
    users.push({ message, friend });
  }
  return Responses.success(res, "Get data Successfully ", users);
}
export default getAllUsers;
