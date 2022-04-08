const nameInput = document.querySelector("#name");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");
const button = document.querySelector("#btn");
// form.action = "https://google.com/search";
// form.submit();
// console.log(button);
button.addEventListener("onclick", (e) => {
	e.target.preventDefault();
	let formData = new FormData(form);
	console.log(formData);
});

const btnRequest = document.querySelector("#btnRequest");

btnRequest.addEventListener("click", func);

async function func(e) {
	e.preventDefault();

	let response = await fetch("http://localhost:8000/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});

	/** -- Для получения тела ответа нам нужно использовать дополнительный вызов метода
	 * response.text() – читает ответ и возвращает как обычный текст,
	 * response.json() – декодирует ответ в формате JSON,
	 * response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
	 * response.blob() – возвращает объект как Blob (бинарные данные с типом),
	 * response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
	 * помимо этого, response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.
	 */
	let result = await response.json();
	console.log(result);
}
