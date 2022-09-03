import Responses from "../../util/response";

async function verifyemail(req, res, next) {
  try {
    const { resetcode, user } = req.models;
    const { code } = req.body;
    const { id } = req.params;
    const valid = await resetcode.findOne({
      where: {
        userId: id,
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
    await resetcode.destroy({
      where: {
        userId: id,
      },
    });
    await user.update(
      { emailVerified: true },
      {
        where: {
          userId: id,
        },
      }
    );
    return Responses.success(res, "Verify Email success", { userid: { id } });
  } catch (err) {
    return next(err);
  }
}
export default verifyemail;
