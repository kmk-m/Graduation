import Responses from "../../util/response.js";

async function addReplay(req, res, next) {
  try {
    const { postReplies, user } = req.models;
    const { replay, commentId } = req.body;
    if (!replay || !commentId) {
      return Responses.badRequest(res, "replay canoy be empty", null);
    }
    let dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 2);
    const add = await postReplies.create({
      userId: req.userId,
      reply: replay,
      commentId: commentId,
    });
    const data = await postReplies.findOne({
      where: {
        id: add.id,
      },
      include: [
        {
          model: user,
          attributes: [
            "firstName",
            "lastName",
            "image",
            "bio",
            "image",
            "userId",
          ],
        },
      ],
    });

    const Replay = {
      data,
      userPost: null,
    };
    return Responses.success(res, "replay Add Successfully", Replay);
  } catch (err) {
    next(err);
  }
}

async function editReplay(req, res, next) {
  try {
    const { postReplies } = req.models;
    const { replay } = req.body;
    const { replayId } = req.params;
    if (!replay || !replayId) {
      return Responses.badRequest(res, "replay canoy be empty", null);
    }

    const add = await postReplies.update(
      {
        replay: replay,
        updatedAt: Date.now(),
      },
      {
        where: {
          id: replayId,
        },
      }
    );
    const Replay = await postReplies.findOne({
      where: {
        id: add.id,
      },
      include: [
        {
          model: user,
          attributes: ["firstName", "lastName", "image", "bio"],
        },
      ],
    });
    return Responses.success(res, "replay Add Successfully", Replay);
  } catch (err) {
    next(err);
  }
}
async function deleteReplay(req, res, next) {
  try {
    const { postReplies } = req.models;
    const { replayId } = req.params;
    if (!replayId) {
      return Responses.badRequest(res, "replay canoy be empty", null);
    }

    const replay = await postReplies.destroy({
      where: {
        id: replayId,
      },
    });
    return Responses.success(res, "Replay Add Successfully", null);
  } catch (err) {
    next(err);
  }
}
export default { addReplay, editReplay, deleteReplay };
