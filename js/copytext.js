function copyText(outputSelector, inputSelector){
	// get the DOM elements by selector
	let outputDiv = document.getElementById(outputSelector);
	let inputField = document.getElementById(inputSelector);
	// update outputDiv's text
	let txt = inputField.value;
	outputDiv.innerHTML = txt;
}
