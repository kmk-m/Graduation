let trackId = "f04517eb-3f57-11ed-b255-0045e21c18f1";
fetch(
  "https://sleepy-bastion-99766.herokuapp.com/Tracks/" +
    trackId +
    "/introVideo/data",
  {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }
)
  .then((response) => response.json())
  .then((json) => data2(json));

function data2(json) {
  let trackData = json.data.track;

  let descElement = document.getElementById("desc_txt");
  descElement.innerHTML = trackData.description;

  let planElement = document.getElementById("plan_txt");
  planElement.innerHTML = trackData.Plan;

  let videoElement = document.getElementById("trackVideo");
  videoElement.src = trackData.introVideo;
  videoElement.onplay();
}
