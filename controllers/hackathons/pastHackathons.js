import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function pastHackathons(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  let hachathons = parseInt(req.query.hachathons);
  let now = new Date();
  now.setHours(now.getHours() + 2);
  const hack = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.lt]: now, // > 6
      },
    },
    limit: 10,
    offset: hachathons,
    order: [["date", "DESC"]],
  });
  const userhack = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.lt]: now, // > 6
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
    limit: 10,
    offset: hachathons,
    order: [["date", "DESC"]],
    attributes: ["hackthonId", "date"],
  });
  const writer = await Hackathons.findAll({
    where: {
      duoDate: {
        [Op.lt]: now, // > 6
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
    limit: 10,
    offset: hachathons,
    attributes: ["hackthonId", "date"],
    order: [["date", "DESC"]],
  });
  console.log(hack);
  const pastHackathons = [];
  // console.log(hack[0].dataValues.userHackthons[0].dataValues);
  for (let i = 0; i < hack.length; i += 1) {
    pastHackathons.push({
      id: hack[i].dataValues.hackthonId,
      name: hack[i].dataValues.name,
      round: hack[i].dataValues.round,
      duoDate: hack[i].dataValues.duoDate,
      users: hack[i].dataValues.users,
      date: hack[i].dataValues.date,
      standing:
        userhack.length > 0 &&
        userhack[0].dataValues.hackthonId === hack[i].dataValues.hackthonId
          ? userhack[0].userHackthons[0].standing
          : 0,

      writers: writer[i].dataValues.userHackthons,
    });
    userhack.length > 0 ? userhack.shift() : null;
  }

  return Responses.success(res, "Successfully Get Hckathons", {
    pastHackathons,
  });
}
export default pastHackathons;
