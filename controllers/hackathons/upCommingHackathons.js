import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function upCommingHackathons(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  let now = new Date();
  now.setHours(now.getHours() + 2);
  const hack = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.gte]: now, // > 6
      },
    },
    order: [["date", "ASC"]],
  });
  const writer = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.gte]: now, // > 6
      },
    },
    include: [
      {
        model: userHackthons,
        where: { standing: -1 },
        attributes: ["id"],
        include: [
          {
            model: user,
            attributes: ["firstName", "lastName", "rating"],
          },
        ],
      },
    ],
    attributes: ["hackthonId", "date"],
    order: [["date", "ASC"]],
  });
  console.log(writer);
  const userhack = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.gte]: now, // > 6
      },
    },
    include: [
      {
        model: userHackthons,
        where: {
          userId: req.userId,
        },
      },
    ],
    order: [["date", "ASC"]],
    attributes: ["hackthonId", "date"],
  });
  const upCommingHackathons = [];
  // console.log(hack[0].dataValues.userHackthons[0].dataValues);
  for (let i = 0; i < hack.length; i += 1) {
    upCommingHackathons.push({
      id: hack[i].dataValues.hackthonId,
      name: hack[i].dataValues.name,
      round: hack[i].dataValues.round,
      duoDate: hack[i].dataValues.duoDate,
      users: hack[i].dataValues.users,
      date: hack[i].dataValues.date,
      register:
        userhack.length > 0 &&
        userhack[0].dataValues.hackthonId === hack[i].dataValues.hackthonId
          ? false
          : true,
      writers: writer[i].dataValues.userHackthons,
    });
    userhack.length > 0 ? userhack.shift() : null;
  }

  return Responses.success(res, "Successfully Get Hckathons", {
    upCommingHackathons,
  });
}
export default upCommingHackathons;
