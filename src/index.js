function generatePoem(event) {
	event.preventDefault();

	let poemElement = document.querySelector("#poem");
	new Typewriter("#poem", {
		strings: ["This is a test"],
		autoStart: true,
		cursor: "",
		delay: 100,
	});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
