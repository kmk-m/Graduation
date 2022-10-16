/* Countdown Timer */ 
let countDownDate = new Date("Nov 15, 2022 11:08:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let hours = Math.floor((dateDiff % (1000 * 60 *60 * 60 * 60 * 24 )) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours} :` :`${hours} :`;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes} ` : minutes;
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
/* quiz navigation block  */
let check;
let allBoxes = document.querySelectorAll(".noquest");
allBoxes.forEach((e)=>{
  e.onclick = function(){
     console.log(check)
    if (typeof check !== "undefined"){
      document.getElementById(check).style.border =" 1px solid white";
      // e.style.border =" 1px solid #FCB500";
    }
      e.style.border =" 1px solid #FCB500";
    check=e.id;
  }
});

function changeColorans(){
  var element = document.getElementById("1");
        element.style.background="#FCB500";
        element.style.color ="#ffff";
  }
   function changeColorans2(){
  var element = document.getElementById("2");
        element.style.background="#FCB500";
        element.style.color ="#ffff";
  }

/* quiz navigation block  
  function changeColorans(){
  var element = document.getElementById("noquest1");
        element.style.background="#FCB500";
        element.style.color ="#ffff";
  }*/
/* select NO exam 
let countspan= document.querySelector(".noquest")
function getQuestions(){
  let myrequest = new XMLHttpRequest();
  myrequest.onreadystatechange = function (){
    if(  this.readyState==4 && this.status==200 ){
      let questionsobject = JSON.parse(this.responseText);
      console.log(questionsobject);
    }
  };
  myrequest.open("GET","html_questions.json",true);
  myrequest.send();
}
getQuestions(); */

