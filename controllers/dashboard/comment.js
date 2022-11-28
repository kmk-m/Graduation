import { query } from "express";
import Responses from "../../util/response.js";

async function getComments(req, res, next) {
  const { postComments, postReplies, userPosts, user } = req.models;
  const { postId } = req.params;
  const { Comments } = req.query;
  let limit = 0;
  if (Comments == 0) limit = 1;
  else limit = 2;
  console.log("hhhh", req.query);
  const Comment = await postComments.findAll({
    where: {
      postId: postId,
    },
    attributes: ["id", "postId", "comment", "updatedAt", "upvote", "image"],
    limit: limit,
    offset: parseInt(Comments),
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
      // {
      //   model: postReplies,
      //   // offset: 0,
      //   attributes: [
      //     "id",
      //     "commentId",
      //     "reply",
      //     "updatedAt",
      //     "upvote",
      //     "image",
      //   ],
      //   subQuery: false,
      //   limit: 2,
      //   offset: 0,
      //   order: [["updatedAt", "ASC"]],

      //   include: [
      //     {
      //       model: userPosts,
      //       attributes: ["upVote"],
      //     },
      //     {
      //       model: user,
      //       attributes: ["userId", "firstName", "lastName", "bio", "image"],
      //     },
      //   ],
      // },
    ],
  });
  let comments = [];
  for (let comment of Comment) {
    let numberOfReplies = await postReplies.count({
      where: {
        commentId: comment.dataValues.id,
      },
    });
    let replay = null;
    if (numberOfReplies > 0) {
      replay = await postReplies.findOne({
        where: {
          commentId: comment.dataValues.id,
        },
        attributes: [
          "id",
          "commentId",
          "reply",
          "updatedAt",
          "upvote",
          "image",
        ],
        limit: 1,
        offset: 0,
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
    }
    comments.push({ comment, replay, numberOfReplies });
  }
  return Responses.success(res, "get comments successfully", comments);
}

async function addcomment(req, res, next) {
  try {
    const { postComments, user } = req.models;
    const { comment, postId } = req.body;

    if (!comment || !postId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }
    let dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 2);
    const add = await postComments.create({
      userId: req.userId,
      comment: comment,
      postId: postId,
    });
    const data = await postComments.findOne({
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

    const Comment = {
      data,
      userPost: null,
    };
    return Responses.success(res, "comment Add Successfully", Comment);
  } catch (err) {
    next(err);
  }
}

async function editcomment(req, res, next) {
  try {
    const { postComments, user } = req.models;
    const { comment, image } = req.body;
    const { commentId } = req.params;
    console.log(commentId);
    if (!comment || !commentId) {
      return Responses.badRequest(res, "comment canoy be empty", null);
    }

    const add = await postComments.update(
      {
        comment: comment,
      },
      {
        where: {
          id: commentId,
        },
      }
    );
    const Comment = await postComments.findOne({
      where: {
        id: commentId,
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
export default { getComments, addcomment, editcomment, deleteComment };
