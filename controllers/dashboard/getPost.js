import Responses from "../../util/response.js";
async function getPost(req, res, next) {
  console.log(":yes");
  const { post } = req.models;
  const { postId } = req.params;

  const valid = await post.findOne({
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
export default getPost;
