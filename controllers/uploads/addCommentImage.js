import Responses from "../../util/response.js";

async function addCommentImage(req, res, next) {
  try {
    const { postComments, user } = req.models;
    const { comment, postId } = req.body;
    const { commentId } = req.params;
    var image = req.file;

    if (image) image = image.path;
    console.log("ppppppppppop", image);
    const add = await postComments.update(
      {
        image: image,
      },
      {
        where: {
          id: commentId,
        },
      }
    );
    const data = await postComments.findOne({
      where: {
        id: commentId,
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
    console.log(Comment);
    return Responses.success(res, "comment Add Successfully", Comment);
  } catch (err) {
    next(err);
  }
}
export default addCommentImage;
