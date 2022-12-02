import Responses from "../../util/response.js";
async function getPost(req, res, next) {
  console.log(":yes");
  const { posts } = req.models;
  const { postId } = req.params;

  const valid = await posts.findOne({
    where: {
      id: postId,
    },
    attributes: ["id"],
  });
  console.log(":hello", valid);
  if (!valid) {
    return Responses.notFound(res, "post Not found");
  } else {
    return Responses.success(res, "get Post Successfully", valid);
  }
}
async function getPosts(req, res, next) {
  const { postnum } = req.query;
  const { posts, postComments, postReplies } = req.models;

  const Posts = await posts.findAll({
    limit: 2,
    offset: parseInt(postnum),
  });
  let allPosts = [];
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
    allPosts.push({
      post,
      numberOfComments,
      numberOfCommentsOnly,
    });
    console.log(numberOfComments);
  }
  return Responses.success(res, "success", allPosts);
}
export default { getPost, getPosts };
