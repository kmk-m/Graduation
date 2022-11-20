fetch(`http://127.0.0.1:3000/exam/e9ea2a08-52dc-11ed-ac01-0045e21c18f1/data`, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
let questions = [];
function data(json) {
  let name = json.data.Quiz.name;
  const para = document.createElement("div");
  para.innerHTML = "<h5>" + name + "</h5>";
  let element = document.getElementById("define");
  element.appendChild(para);
  let hr = document.createElement("hr");
  hr.className = "hrr";
  element.appendChild(hr);
  para.className = "namedy";
  time(json.data.Quiz.time);
  questions = json.data.Questions;
  question(json.data.Questions[0]);
  numberTime(json.data.Quiz.numberOfQuestions);
  //let en=json.data.Quiz.numberOfQuestions;
}
let st=1;
function pre(){
  if ( st>1 ) { st-=1;}
   question(json.data.Questions[st]);
   console.log("jbkj");
}
let en=json.data.Quiz.numberOfQuestions;
function next() {
  if ( st<en) { st+=1; }
   question(json.data.Questions[st]);
  console.log("jbk526j");

}

function question(question) {
  console.log(question);
  document.querySelector(".quiz-area").innerHTML = `
  <div class="question">
  <h2>
   ${question.questionText}
  </h2>
   ${
     question.questionType !== "Text"
       ? `<img src=${questionImage} width="50%" height="auto" />`
       : "<p></p>"
   }
</div>`;
  question.questionAnswers.forEach((e) => {
    document.querySelector(".quiz-area").innerHTML += `
   <div class="answer">
  <input
    type="radio"
    name="gender"
    value="M"
    class="ans"
    id="h.1"
  /><label></label>
  <label for="answer1" class="wordanswer"
    >
    ${e.answerText}
  <br />
  ${
    e.answerType !== "Text"
      ? `<img src=${answerImage} width="50%" height="auto" />`
      : "<p></p>"
  }
  <img
    src="/images/car.jpg"
    width="50%"
    height="auto"
    style="margin-left: 5%"
  /> 
</div>

   `;
  });
}
function time(timequiz) {
  /* Countdown Timer */
  let hac = document.createElement("div");
  hac.className = "hac";
  let haca = document.querySelector(".time-quiz");
  haca.appendChild(hac);
  let dateDiff = timequiz;
  let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();
    // Get Time Units
    let days = Math.floor(dateDiff / (60 * 60 * 24));
    let hours = Math.floor((dateDiff % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((dateDiff % (60 * 60)) / 60);
    let seconds = Math.floor(dateDiff % 60);
    let str = " Days";

    if (days >= 2) {
      hac.innerHTML = `

          <p><span class="days">${days} days</span><span class="day"></span></p>
          `;
    } else {
      hac.innerHTML = `
                  <p>
                  <span class="hours">${
                    hours < 10 ? "0" + hours + " : " : hours + " : "
                  }</span>
                  <span class="minutes">${
                    minutes < 10 ? "0" + minutes + " : " : minutes + " : "
                  }</span>
                  <span class="seconds">${
                    seconds < 10 ? "0" + seconds : seconds
                  }</span>
                  </p> `;
    }
    if (dateDiff <= 0) {
      hac.innerHTML = "00 : 00 : 00";
      clearInterval(counter);
    }
    dateDiff -= 1;
  }, 1000);
  /*  Countdown Timer With Progress Bar */
  const progressBar = document.querySelector(".progress-inner");
  let interval = timequiz;
  let temptime = interval;
  var countdown = setInterval(() => {
    interval--;
    let temp = (interval / temptime) * 100;
    if (temp < 25) {
      progressBar.style.background = "red";
    }
    let progresswidth = (interval / 20) * 100;
    if (interval > 0) {
      progressBar.style.width = progresswidth + "%";
    } else {
      clearInterval(countdown);
      progressBar.style.width = "0%";
    }
  }, 1000);
}
/* quiz navigation block  */
let check;
let allBoxes = document.querySelectorAll(".noquest");

 // allBoxes.forEach((e) => {
//   e.onclick = function () {
//     console.log(check);
//     if (typeof check !== "undefined") {
//       document.getElementById(check).style.border = " 1px solid white";
//       // e.style.border =" 1px solid #FCB500";
//     }
//     e.style.border = " 1px solid #FCB500";
//     check = e.id;
//     console.log(document.getElementById(`h.${e.id}`));
//     scrollTo(document.getElementById(`toScroll.4`));
//   };
// });
let allAns = document.querySelectorAll(".ans");
allAns.forEach((e) => {
  e.onclick = function () {
    const id = e.id.split(".")[1];
    document.getElementById(id).style.backgroundColor = "#2196F3";
  };
});
function numberTime(numcounter) {
  for (let i = 1; i <= numcounter; i += 1) {
    let numb = document.createElement("div");
    numb.setAttribute("id", i);
    numb.className = "noquest";
    let sp = document.createElement("span");
    sp.setAttribute("id", i);
    let number = document.querySelector(".all");
    sp.innerHTML = ` ${i} `;
    numb.appendChild(sp);
    number.appendChild(numb);
    numb.addEventListener("click", () => {
      
      numb.style = "border: 1px solid #2196F3";
      question(questions[i]);
    });
  }
}
/*
function changeColorans() {
  var element = document.getElementById("1");
  element.style.background = "#FCB500";
  element.style.color = "#ffff";
}
function changeColorans2() {
  var element = document.getElementById("2");
  element.style.background = "#FCB500";
  element.style.color = "#ffff";
}
*/
