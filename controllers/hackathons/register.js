import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;

async function register(req, res, next) {
  const { Hackathons, user, userHackthons } = req.models;
  const { hackthonId } = req.params;
  const userHackathon = await userHackthons.create({
    userId: req.userId,
    hackthonId: hackthonId,
  });

  return Responses.success(res, "register successfully", null);
}
export default register;
