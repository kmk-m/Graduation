let body = document.body.innerHTML;
document.body.innerHTML = `
<div class="loading">
<img src="/images/loading.gif" width=100px>;
<img src="/images/loading1.gif" width="50px">;

</div>
`;
fetch(`https://sleepy-bastion-99766.herokuapp.com/check`, {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json.code));

function data(code) {
  console.log(code);
  if (code == "Success") {
    window.location.href = "http://127.0.01:3000/homepage";
  } else {
    console.log(body);
    document.body.innerHTML = body;
  }
}
console.log("jkj");
