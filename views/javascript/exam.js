fetch(`http://127.0.0.1:3000/exam/e9ea2a08-52dc-11ed-ac01-0045e21c18f1/data`, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
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
  numberTime(json.data.Quiz.numberOfQuestions);
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
    console.log(dateDiff);
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
    console.log(temp);
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
scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
  console;
};

allBoxes.forEach((e) => {
  e.onclick = function () {
    console.log(check);
    if (typeof check !== "undefined") {
      document.getElementById(check).style.border = " 1px solid white";
      // e.style.border =" 1px solid #FCB500";
    }
    e.style.border = " 1px solid #FCB500";
    check = e.id;
    console.log(document.getElementById(`h.${e.id}`));
    scrollTo(document.getElementById(`toScroll.4`));
  };
});
let allAns = document.querySelectorAll(".ans");
allAns.forEach((e) => {
  e.onclick = function () {
    const id = e.id.split(".")[1];
    document.getElementById(id).style.backgroundColor = "orange";
  };
});
function numberTime(numcounter) {
  for (let i = 1; i <= numcounter; i += 1) {
    let numb = document.createElement("span");
    numb.className = "noquest";
    let number = document.querySelector(".all");
    numb.innerHTML = ` ${i} `;
    number.appendChild(numb);
  }
}
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
