import Responses from "../../util/response.js";
async function dahsboard(req, res, next) {
  try {
    const {
      user,
      post,
      Hackathons,
      Tracks,
      postComments,
      likes,
      userPosts,
      postReplies,
    } = req.models;
    const User = await user.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["userId", "firstName", "lastName", "image", "bio"],
    });
    // liverbool and manchestercity ?
    const posts = await post.findAll({
      include: [
        {
          model: likes,
          attributes: ["like", "love", "sad", "angry"],
        },
        {
          model: postComments,
          attributes: ["id", "postId", "comment", "updatedAt"],
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
              model: postReplies,

              attributes: ["id", "commentId", "reply", "updatedAt"],
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
    const userposts = await userPosts.findAll({
      where: {
        userId: req.userId,
      },
      attributes: ["postId", "type"],
    });
    // for (let j = 0; j < posts.length; j++) {
    //   // delete posts[j].postFriends;

    //   for (let i = 0; i < posts[j].dataValues.postComments.length; i++) {
    //     if (posts[j].dataValues.postComments[i].dataValues.type !== "comment")
    //       delete posts[j].postComments[i];
    //   }
    // }
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
      userposts,
    });
  } catch (err) {
    next(err);
  }
}

export default dahsboard;
