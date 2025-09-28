function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let prompt = `User instructions are: Generate a love poem about ${instructionsInput.value}`;
	let context =
		"You are a Poem expert and love to write beautiful and short poems. Your mission is to generate 4 line poems in basic HTML (do not show this) and seperate each line with a <br>, make sure to follow the user instructions. Do not include a title";
	let apiKey = "007o490fa9c43ta708a74ba7cfaf7bcb";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `⏳ Generating a Love Poem about ${instructionsInput.value}`;

	axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		cursor: "",
		delay: 50,
	});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
