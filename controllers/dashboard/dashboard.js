import Responses from "../../util/response.js";
import sequelize from "sequelize";
const Op = sequelize.Op;
const squery = sequelize.query;
const distinct = sequelize.distinct;
async function dahsboard(req, res, next) {
  try {
    const {
      user,
      posts,
      Hackathons,
      Tracks,
      postComments,
      userHackthons,
      userPosts,
      postReplies,
      userInterests,
      categories,
      userFriends,
      postImages,
    } = req.models;

    const singUp = await userInterests.findOne({
      where: {
        userId: req.userId,
      },
    });
    if (!singUp) {
      return Responses.badRequest(res, "not has Interests");
    }
    const User = await user.findOne({
      where: {
        userId: req.userId,
      },
      include: [
        {
          model: userInterests,
          attributes: ["interestId"],
        },
      ],
      attributes: ["userId", "firstName", "lastName", "image", "bio"],
    });
    const interests = [];
    for (let i of User.userInterests) {
      interests.push(i.dataValues.interestId);
    }
    const friends = await userFriends.findAll({
      where: {
        userId: req.userId,
      },
      attributes: ["friendId"],
    });
    const allFriend = [];
    for (let i of friends) {
      allFriend.push(i.dataValues.friendId);
    }
    allFriend.push(req.userId);
    const Friends = await userInterests.findAll({
      where: {
        userId: {
          [Op.notIn]: allFriend,
        },
        interestId: {
          [Op.or]: interests,
        },
      },
      limit: 5,
      offset: 0,
      include: [
        {
          model: user,
          attributes: ["firstName", "lastName", "image", "bio"],
        },
      ],
      attributes: ["userId"],
    });
    // liverbool and manchestercity ?

    const Posts = await posts.findAll({
      // order: [[{ model: postComments }, "updatedAt", "ASC"]],
      limit: 2,
      offset: 0,
      order: [["createdAt", "DESC"]],

      include: [
        {
          model: user,
        },
        {
          model: postImages,
        },
      ],
    });
    let allPost = [];
    for (let post of Posts) {
      const numberOfComments = await postComments.count({
        where: {
          postId: post.dataValues.id,
        },
        include: {
          model: postReplies,
        },
      });
      const numberOfCommentsOnly = await postComments.count({
        where: {
          postId: post.dataValues.id,
        },
      });
      allPost.push({
        post,
        numberOfComments,
        numberOfCommentsOnly,
      });
      console.log(numberOfComments);
    }
    let now = new Date();
    now.setHours(now.getHours() + 2);

    const hackthons = await Hackathons.findAll({
      where: {
        startDate: {
          [Op.gt]: now, // > 6
        },
      },
      include: [
        {
          model: categories,
          attributes: ["name"],
        },
      ],
      offset: 0,
      limit: 1,
      order: [["startDate", "ASC"]],

      attributes: ["id", "image", "name", "free", "online", "startDate"],
    });
    const numberOfHackathons = await userHackthons.count({
      where: {
        hackthonId: hackthons[0].dataValues.id,
      },
    });
    const tracks = await Tracks.findAll({
      attributes: ["name", "trackId"],
    });
    console.log(allPost);
    return Responses.success(res, "data", {
      User,
      hackthons,
      allPost,
      // numberOfComments,
      tracks,
      Friends,
      numberOfHackathons,
    });
  } catch (err) {
    next(err);
  }
}

export default dahsboard;
