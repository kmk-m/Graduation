let id = window.location.href;
id = id.slice(id.lastIndexOf("/") + 1);
console.log(id);
fetch("http://127.0.0.1:3000/Tracks/data/" + id, {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => data(json));
function data(json) {
  /* return name */
  console.log(json.data.User.firstName + " " + json.data.User.lastName);
  let name = json.data.User.firstName + " " + json.data.User.lastName;
  const para = document.createElement("div");
  para.innerHTML = "<h5>" + name + "</h5>";
  let element = document.getElementById("practice");
  element.appendChild(para);
  para.classList.add("op");
  /* return image */
  let img = document.createElement("img");
  img.src = json.data.User.image;
  let elementimg = document.getElementById("practice");
  elementimg.appendChild(img);
  img.classList.add("image1");
  img.alt = "profile";
  img.title = "profile";
  img.setAttribute("id", "image1");
  console.log(img);
  /* return text button */
  console.log(json.data.User.cretificate);
  let butt = json.data.User.cretificate;
  const para2 = document.createElement("div");
  if (butt == null) {
    para2.innerHTML = "<h3>Enroll</h3>";
  } else {
    para.innerHTML = "<h5>" + butt + "</h5>";
  }
  let elementbutton = document.getElementById("buton");
  elementbutton.appendChild(para2);
  para2.classList.add("textbutton");
  let but = document.getElementById("image1");
  console.log("helllo ", but);

  but.addEventListener("click", gotoprofile);

  function gotoprofile() {
    window.location.href = "https:127.0.0.1:3000/profile";
  }
}
/*  Derag N drop */ 
const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}
/*   pop-up */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}