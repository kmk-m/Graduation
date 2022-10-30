import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function getFriends(req, res, next) {
  const { userFriends, user, userHackthons } = req.models;
  const { hackthonId } = req.params;
  let users = parseInt(req.query.users);
  console.log(req.userId);
  const userfriend = await userFriends.findAll({
    where: {
      userId: req.userId,
    },
    include: [
      {
        model: user,
        attributes: ["userId", "firstName", "lastName", "rating"],
      },
    ],
  });
  const hackathonFriends = [];
  for (let i = 0; i < userfriend.length; i++) {
    console.log(userfriend[i].dataValues);
    const userHackathon = await userHackthons.findAll({
      where: {
        hackthonId: hackthonId,
        userId: userfriend[i].dataValues.user.userId,
        standing: {
          [Op.ne]: -1,
        },
      },
      include: [
        {
          model: user,
          attributes: ["firstName", "lastName", "rating"],
          order: [["rating", "DESC"]],
        },
      ],
      limit: 10,
      offset: users,
      attributes: ["standing"],
    });
    hackathonFriends.push(userHackathon);
  }
  return Responses.success(res, "Successfully Get Hckathons", hackathonFriends);
}
export default getFriends;
