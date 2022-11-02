import Responses from "../../util/response.js";

async function addReplayImage(req, res, next) {
  try {
    const { postReplies, user } = req.models;
    const { reply } = req.body;
    const { replayId } = req.params;
    var image = req.file;

    if (image) image = image.path;
    const add = await postReplies.update(
      {
        image: image,
      },
      {
        where: {
          id: replayId,
        },
      }
    );
    const data = await postReplies.findOne({
      where: {
        id: replayId,
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
export default addReplayImage;
