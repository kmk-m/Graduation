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
      userInterests,
    } = req.models;
    const User = await user.findOne({
      where: {
        userId: req.userId,
      },
      attributes: ["userId", "firstName", "lastName", "image", "bio"],
    });
    const singUp = await userInterests.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (!singUp) {
      return Responses.badRequest(res, "not has Interests");
    }
    // liverbool and manchestercity ?
    const posts = await post.findAll({
      include: [
        {
          model: postComments,
          attributes: [
            "id",
            "postId",
            "comment",
            "updatedAt",
            "upvote",
            "downvote",
          ],
          include: [
            {
              model: postReplies,

              attributes: [
                "id",
                "commentId",
                "reply",
                "updatedAt",
                "upvote",
                "downvote",
              ],
              include: [
                {
                  model: userPosts,
                  attributes: ["upVote"],
                },
                {
                  model: user,
                  attributes: ["firstName", "lastName", "bio", "image"],
                },
              ],
            },
            {
              model: user,
              attributes: ["firstName", "lastName", "bio", "image"],
            },
            {
              model: userPosts,
              attributes: ["upVote"],
            },
          ],
        },
        {
          model: userPosts,
          attributes: ["upVote"],
        },
      ],
    });

    // for (let j = 0; j < posts.length; j++) {
    //   // delete posts[j].postFriends;

    //   for (let i = 0; i < posts[j].dataValues.postComments.length; i++) {
    //     if (posts[j].dataValues.postComments[i].dataValues.type !== "comment")
    //       delete posts[j].postComments[i];
    //   }
    // }
    const hackathons = await Hackathons.findAll({
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
