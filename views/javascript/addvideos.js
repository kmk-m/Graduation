// // script.js
// const form = document.getElementById("form");

// form.addEventListener("submit", submitForm);

// async function handleSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formProps = Object.fromEntries(formData);
//   fetch("http://127.0.0.1:3000/admin/addvideos", {
//     method: "POST",
//     body: JSON.stringify({
//       email: formProps.comment,
//       password: formProps.video,
//     }),

//     headers: {
//       "Content-type": "multipart/form-data",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
