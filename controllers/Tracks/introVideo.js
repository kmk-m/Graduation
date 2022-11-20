import Response from "../../util/response.js";
async function introVideo(req, res, next) {
  const { user, userRates, Tracks } = req.models;
  const { trackId } = req.params;
  const track = await Tracks.findOne({
    where: {
      trackId: trackId,
    },
    attributes: ["introVideo", "description", "Plan"],
  });
  const numberOfAllUsers = await userRates.count({
    where: {
      trackId: trackId,
    },
  });
  const numberOf1StarUsers = await userRates.count({
    where: {
      trackId: trackId,
      rate: "Star1",
    },
  });
  const numberOf2StarUsers = await userRates.count({
    where: {
      trackId: trackId,
      rate: "Star2",
    },
  });
  const numberOf3StarUsers = await userRates.count({
    where: {
      trackId: trackId,
      rate: "Star3",
    },
  });
  const numberOf4StarUsers = await userRates.count({
    where: {
      trackId: trackId,
      rate: "Star4",
    },
  });
  const numberOf5StarUsers = await userRates.count({
    where: {
      trackId: trackId,
      rate: "Star5",
    },
  });
  return Response.success(res, "get Data Successfully", {
    track,
    numberOfAllUsers,
    numberOf1StarUsers,
    numberOf2StarUsers,
    numberOf3StarUsers,
    numberOf4StarUsers,
    numberOf5StarUsers,
  });
}
export default introVideo;
