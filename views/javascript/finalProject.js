fetch("http://127.0.0.1:3000/courses/4ecbb59f-4145-11ed-b8c1-0045e21c18f1/finalProject/data", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => requ(json.data));

function requ(json) {
  const par = json.Requirements.requirement.split(",");
  const p = document.createElement("p");

  for (let i = 0; i < par.length; i++) {

    p.innerHTML += `• ${par[i]} <br> <br>`;

  }
  const req = document.querySelector(".req");
  req.appendChild(p);

  // 1st link 

  const par2 = json.lastSubmission;
  const p2 = document.createElement("p");

  p2.innerHTML = `${par2[0].link}`;

  const recuva = document.querySelector(".link1");
  recuva.prepend(p2);

  // 1st comment
  const p3 = document.createElement("p");

  p3.innerHTML += ` • ${(par2[0].Comment).slice(0, 10)} <br> <br> • ${(par2[0].Comment).slice(11)}`;

  const recuva2 = document.querySelector(".comments");
  recuva2.appendChild(p3);

  // 2nd link
  const p4 = document.createElement("p");

  p4.innerHTML = `${par2[1].link} `;

  const recuva3 = document.querySelector(".link2");
  recuva3.prepend(p4);

  // 2nd comment 
  const p5 = document.createElement("p");

  p5.innerHTML += ` • ${par2[1].Comment} `;

  const recuva4 = document.querySelector(".comment2");
  recuva4.appendChild(p5);
}
