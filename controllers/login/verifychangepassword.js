import Responses from "../../util/response";

async function verifychangepassword(req, res, next) {
  try {
    const { resetcode, user } = req.models;
    const { code } = req.body;
    var { userId } = req.params;
    userId = userId.slice(1);
    const valid = await resetcode.findOne({
      where: {
        code: code,
      },
      include: [
        {
          model: user,
        },
      ],
    });
    if (!valid) {
      return Responses.badRequest(
        res,
        "code isnot correct",
        "code isnot correct"
      );
    }
    if (userId !== valid.dataValues.userId) {
      return Responses.forbidden(
        res,
        "You donot have permission to access this"
      );
    }

    const userid = valid.user.userId;
    return Responses.success(res, "Verify code success", {
      userid: { userid },
    });
  } catch (err) {
    return next(err);
  }
}
export default verifychangepassword;
