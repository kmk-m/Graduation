import Responses from "../../util/response.js";

async function addPost(req, res, next) {
  try {
    const { postComments, user, postImages } = req.models;
    const { postId } = req.params;
    var image = req.file;
    if (image) image = image.path;
    else image = null;
    await postImages.create({
      postId,
      link: image,
    });
    return Responses.success(
      res,
      "add photo successfully",
      "add photo successfully"
    );
  } catch (err) {
    next(err);
  }
}
export default addPost;
