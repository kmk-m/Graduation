import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function pastHackathons(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  let now = new Date();
  now.setHours(now.getHours() + 2);
  const hack = await Hackathons.findAll({
    where: {
      date: {
        [Op.lt]: now, // > 6
      },
    },
    limit: 5,
    offset: 0,
    sort: ["date", "desc"],
    attributes: [
      "Hackathons.*",
      userHackthons,
      [sequelize.fn("COUNT", sequelize.col(userHackthons.id)), "PostCount"],
    ],
    include: [userHackthons],
  });
  //   hack.forEach((e) => {
  //     let id = e.dataValues.hackthonId;
  //     const hack2 = await userHackthons.count({

  //     })
  //   });
  return Responses.success(res, "Successfully Get Hckathons", {
    pastHackathons,
  });
}
export default pastHackathons;
