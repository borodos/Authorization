const nameInput = document.querySelector("#name");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");
const button = document.querySelector("#btn");
// form.action = "https://google.com/search";
// form.submit();
// console.log(button);
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let formData = new FormData(form);
	console.log(formData.body);
});
// method: "POST",
// headers: {
// 	"Content-Type": "application/x-www-form-urlencoded",
// },

for (let index = 0; index < form.length; index++) {
	const element = form[index];
	console.log(element);
}

// async function sendReq() {
// 	let response = await fetch("http://localhost:3000/", {
// 		method: "GET",
// 	});
// 	let result = await response.json();
// }
