import Responses from "../../util/response";

async function addcomment(req, res, next) {
  try {
    const { postComments, user } = req.models;
    const { comment, postId } = req.body;
    if (!comment || !postId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }

    const add = await postComments.create({
      userId: req.userId,
      comment: comment,
      postId: postId,
      updatedAt: Date.now(),
      type: "comment",
    });
    const Comment = await postComments.findOne({
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
    return Responses.success(res, "comment Add Successfully", Comment);
  } catch (err) {
    next(err);
  }
}

async function editcomment(req, res, next) {
  try {
    const { postComments } = req.models;
    const { comment } = req.body;
    const { commentId } = req.params;
    console.log(commentId);
    if (!comment || !commentId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    console.log(commentId);

    const add = await postComments.update(
      {
        comment: comment,
        updatedAt: Date.now(),
      },
      {
        where: {
          id: commentId,
        },
      }
    );
    const Comment = await postComments.findOne({
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
    return Responses.success(res, "comment Add Successfully", Comment);
  } catch (err) {
    next(err);
  }
}
async function deleteComment(req, res, next) {
  try {
    const { postComments } = req.models;
    const { commentId } = req.params;
    if (!commentId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }

    const Comment = await postComments.destroy({
      where: {
        id: commentId,
      },
    });
    return Responses.success(res, "comment Add Successfully", null);
  } catch (err) {
    next(err);
  }
}
export default { addcomment, editcomment, deleteComment };
