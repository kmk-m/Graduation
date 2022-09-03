import Responses from "../../util/response";

async function addvideos(req, res, next) {
  try {
    const { motivation_videos } = req.models;
    const { comment } = req.body;
    var video = req.file;
    if (!video) {
      return Responses.badRequest(
        res,
        "You donat add mb4 video",
        "You donat add mb4 video"
      );
    }
    video = video.path;
    const success = await motivation_videos.create({
      comment,
      video,
    });
    return Responses.success(
      res,
      "add video Succssfully",
      "add video Succssfully"
    );
  } catch (err) {
    next(err);
  }
}
export default addvideos;
