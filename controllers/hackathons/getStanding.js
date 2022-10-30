import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function getStanding(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  const { hackathonId } = req.params;

  let users = parseInt(req.query.users);
  const hack = await userHackthons.findAll({
    where: {
      hackthonId: hackathonId,
      status: "SUBMITED",
    },
    include: [
      {
        model: user,
        attributes: ["firstName", "lastName", "rating"],
      },
    ],
    limit: 10,
    offset: users,
    order: [["standing", "ASC"]],
    attributes: ["points", "time", "solution"],
  });

  return Responses.success(res, "Successfully Get Hckathons", hack);
}
export default getStanding;
