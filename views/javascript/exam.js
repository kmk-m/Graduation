/* Countdown Timer */ 
let countDownDate = new Date("oct 13, 2022 11:08:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let hours = Math.floor((dateDiff % (1000 * 60 *60 * 60 * 60 * 24 )) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` :`${hours} :`;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
/* Countdown Timer With Progress Bar */
var progress = document.getElementById("progress");
var width = 0;
var startProgress = function startProgress() {
    width+=60/3600; // take time api 
    if (width > 75) {
          progress.style.backgroundColor = "red";
        } else  {
          progress.style.backgroundColor = "#FCB500";
        }
        progress.style.width = width + "%";
        if (width < 100) {
          window.requestAnimationFrame(startProgress);
        } else {
    window.cancelAnimationFrame(startProgress)
  }
};
/* select NO exam */
