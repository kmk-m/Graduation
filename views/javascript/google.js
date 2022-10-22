let token = document.cookie.slice(
  document.cookie.lastIndexOf("access_token") + 13
);
if (document.location.href.includes("auth/google")) {
  window.location.href = "http://127.0.0.1:3000/google2/:" + token;
} else {
  token = document.location.href.slice(
    document.location.href.lastIndexOf(":") + 1
  );
  fetch("http://127.0.0.1:3000/loginGoogle/" + token, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => login(json));
}
function login(json) {
  window.location.href = "https://sleepy-bastion-99766.herokuapp.com";
}
