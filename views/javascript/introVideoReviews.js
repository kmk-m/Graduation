let id = "f04517eb-3f57-11ed-b255-0045e21c18f1";
let numberOfUsers = 0;

fetch(
  "http://127.0.0.1:3000/Tracks/" +
    id +
    "/introVideo/getUsers?users=" +
    numberOfUsers,
  {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }
)
  .then((response) => response.json())
  .then((json) => data(json));

function data(json) {
  let userReviewsArray = json.data;

  for (let index in userReviewsArray) {
    let userReview = userReviewsArray[index];

    //==============================={{ left div }}=====================================================
    let leftDiv = document.createElement("div");
    leftDiv.classList.add("profile-section");

    //--------- div img --------
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("profile-img");

    let itemImg = document.createElement("img");
    itemImg.src = userReview.user.image;
    imgDiv.appendChild(itemImg);

    //-------  h3
    let reviewerName = document.createElement("h3");
    reviewerName.classList.add("comment-author");
    reviewerName.innerHTML =
      userReview.user.firstName + " " + userReview.user.lastName;

    //------- stars div
    var coloredStarsCount = 0;
    switch (userReview.rate) {
      case "Star1":
        coloredStarsCount = 1;
      case "Star2":
        coloredStarsCount = 2;
      case "Star3":
        coloredStarsCount = 3;
      case "Star4":
        coloredStarsCount = 4;
      case "Star5":
        coloredStarsCount = 5;
    }

    let starsDiv = document.createElement("div");
    starsDiv.classList.add("stars-div");
    for (let i = 1; i <= 5; i++) {
      let star = document.createElement("span");
      star.classList.add("fa");
      star.classList.add("fa-star");
      starsDiv.appendChild(star);

      if (i <= coloredStarsCount) {
        star.classList.add("checked");
      }
    }
    //---------------
    leftDiv.appendChild(imgDiv);
    leftDiv.appendChild(reviewerName);
    leftDiv.appendChild(starsDiv);

    //==============================={{ right div }}==============================================
    let rightDiv = document.createElement("div");
    rightDiv.classList.add("comment-section");

    let commentTitle = document.createElement("h3");
    commentTitle.classList.add("comment_title");
    commentTitle.innerHTML = "";

    let commentDate = document.createElement("p");
    commentDate.classList.add("comment_date");
    commentDate.innerHTML = "";

    let commentDesc = document.createElement("p");
    commentDesc.classList.add("comment_txt");
    commentDesc.innerHTML = "";

    rightDiv.appendChild(commentTitle);
    rightDiv.appendChild(commentDate);
    rightDiv.appendChild(commentDesc);

    //==============================================================================================
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment_container");

    commentDiv.appendChild(leftDiv);
    commentDiv.appendChild(rightDiv);

    //==============================================================================================
    let allCommentsContainer = document.getElementById("allCommentsContainer");
    allCommentsContainer.appendChild(commentDiv);
  }
}
