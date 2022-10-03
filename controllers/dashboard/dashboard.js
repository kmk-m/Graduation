import Responses from "../../util/response";
import comment from "./comment";
async function dahsboard(req, res, next) {
  try {
    const { user, post, Hackathons, Tracks, postComments, likes, postFriends } =
      req.models;
    const User = await user.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["firstName", "lastName", "image", "bio"],
    });
    const posts = await post.findAll({
      include: [
        {
          model: likes,
          attributes: ["like", "love", "sad", "angry"],
        },
        {
          model: postComments,
          attributes: [
            "id",
            "postId",
            "commentId",
            "type",
            "comment",
            "updatedAt",
          ],
          include: [
            {
              model: user,
              attributes: ["firstName", "lastName", "image", "bio"],
            },
            {
              model: likes,
              attributes: ["like", "love", "sad", "angry"],
            },
            {
              model: postComments,

              attributes: [
                "id",
                "postId",
                "commentId",
                "type",
                "comment",
                "updatedAt",
              ],
              include: [
                {
                  model: user,
                  attributes: ["firstName", "lastName", "image", "bio"],
                },
                {
                  model: likes,
                  attributes: ["like", "love", "sad", "angry"],
                },
              ],
            },
          ],
        },
      ],
    });
    for (let j = 0; j < posts.length; j++) {
      for (let i = 0; i < posts[j].dataValues.postComments.length; i++) {
        if (posts[j].dataValues.postComments[i].dataValues.type !== "comment")
          delete posts[j].postComments[i];
      }
    }
    const hackathons = await Hackathons.findAll({
      where: {
        finished: 0,
      },
      attributes: ["name", "date", "round", "hackthonId"],
    });
    const tracks = await Tracks.findAll({
      attributes: ["name", "trackId"],
    });
    return Responses.success(res, "data", {
      User,
      hackathons,
      posts,
      tracks,
    });
  } catch (err) {
    next(err);
  }
}

export default dahsboard;
