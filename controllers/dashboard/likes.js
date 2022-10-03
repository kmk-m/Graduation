import sequelize from "sequelize";
import Responses from "../../util/response";

async function addLikePost(req, res, next) {
  try {
    const { likes } = req.models;
    const { type } = req.body;
    const { postId } = req.params;
    if (!type || !postId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    const like = await likes.increment(`${type}`, {
      by: 1,
      where: { postId: postId },
    });
    return Responses.success(res, "like Add Successfully", null);
  } catch (err) {
    next(err);
  }
}
async function addLikeComment(req, res, next) {
  try {
    const { likes } = req.models;
    const { type } = req.body;
    const { commentId } = req.params;
    if (!type || !commentId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    const like = await likes.increment(`${type}`, {
      by: 1,
      where: { postId: postId },
    });
    return Responses.success(res, "like Add Successfully", null);
  } catch (err) {
    next(err);
  }
}
async function deleteLikePost(req, res, next) {
  try {
    const { likes } = req.models;
    const { type } = req.body;
    const { postId } = req.params;
    if (!type || !postId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    const like = await likes.increment(`${type}`, {
      by: -1,
      where: { postId: postId },
    });
    return Responses.success(res, "like Add Successfully", null);
  } catch (err) {
    next(err);
  }
}
async function deleteLikeComment(req, res, next) {
  try {
    const { likes } = req.models;
    const { type } = req.body;
    const { commentId } = req.params;
    if (!type || !commentId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    const like = await likes.increment(`${type}`, {
      by: -1,
      where: { postId: postId },
    });
    return Responses.success(res, "like Add Successfully", null);
  } catch (err) {
    next(err);
  }
}

export default {
  addLikeComment,
  addLikePost,
  deleteLikeComment,
  deleteLikePost,
};
