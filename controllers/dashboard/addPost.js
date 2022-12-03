import Responses from "../../util/response.js";
async function addPost(req, res, next) {
  try {
    const { posts } = req.models;
    const { content, video } = req.body;
    const post = await posts.create({
      content,
      userId: req.userId,
      video: video,
      link: "",
    });
    return Responses.success(res, "add post Successfully", post);
  } catch (err) {
    next(err);
  }
}
export default addPost;
