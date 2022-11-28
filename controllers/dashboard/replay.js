import Responses from "../../util/response.js";

async function getReplay(req, res, next) {
  console.log("SDasd");
  const { postReplies, userPosts, user } = req.models;
  const { commentId } = req.params;
  const { replays } = req.query;
  let limit = 0;
  if (replays == 0) limit = 1;
  else limit = 2;
  console.log("hhhh", req.query);
  const allReplays = await postReplies.findAll({
    where: {
      commentId: commentId,
    },
    attributes: ["id", "commentId", "reply", "updatedAt", "upvote", "image"],
    limit: limit,
    offset: parseInt(replays),
    order: [["updatedAt", "ASC"]],
    include: [
      {
        model: userPosts,
        attributes: ["upVote"],
      },
      {
        model: user,
        attributes: ["userId", "firstName", "lastName", "bio", "image"],
      },
    ],
  });
  return Responses.success(res, "get comments successfully", allReplays);
}

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
    const { postReplies, user } = req.models;
    const { replay } = req.body;
    const { replayId } = req.params;
    if (!replay || !replayId) {
      return Responses.badRequest(res, "replay canoy be empty", null);
    }
    console.log(replayId);
    const add = await postReplies.update(
      {
        reply: replay,
      },
      {
        where: {
          id: replayId,
        },
      }
    );
    const Replay = await postReplies.findOne({
      where: {
        id: replayId,
      },
      include: [
        {
          model: user,
          attributes: ["firstName", "lastName", "image", "bio"],
        },
      ],
    });
    console.log(Replay);

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
export default { addReplay, editReplay, deleteReplay, getReplay };
