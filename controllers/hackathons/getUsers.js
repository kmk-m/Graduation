import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function getUsers(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  const { hackthonId } = req.params;
  let users = parseInt(req.query.users);
  const userHackathon = await userHackthons.findAll({
    where: {
      hackthonId: hackthonId,
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
    attributes: ["id"],
  });

  return Responses.success(res, "Successfully Get Hckathons", userHackathon);
}
export default getUsers;
