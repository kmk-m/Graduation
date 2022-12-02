import Responses from "../../util/response.js";

async function addPost(req, res, next) {
  try {
    const { postComments, user } = req.models;
    const { comment, postId } = req.body;
    const { commentId } = req.params;
    var image = req.file;

    if (image) image = image.path;
    else image = null;
    console.log("ppppppppppop", req.file);
  } catch (err) {
    next(err);
  }
}
export default addPost;
