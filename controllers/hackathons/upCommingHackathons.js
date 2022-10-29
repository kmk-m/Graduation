import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function upCommingHackathons(req, res, next) {
  const { Hackathons } = req.models;
  const now = new Date();
  const upcommingHackathons = await Hackathons.findAll({
    where: {
      date: {
        [Op.gte]: now, // > 6
      },
    },
  });

  //   const upcommingHackathons2 = allHackathons.filter((a) => {
  //     return a.dataValues.date > now;
  //   });
  //   const pastHackathons = allHackathons.filter((a) => {
  //     return a.dataValues.date < now;
  //   });
  //   const todayHackathons = allHackathons.filter((a) => {
  //     return a.dataValues.date === now;
  //   });

  return Responses.success(res, "Successfully Get Hckathons", {
    upcommingHackathons,
    // upcommingHackathons2,

    // pastHackathons,
    // todayHackathons,
  });
}
export default upCommingHackathons;
