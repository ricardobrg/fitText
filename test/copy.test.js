describe('copyText', function () {
  it('should copy the value from input text and paste it as innerHTML', function () {
	var inputText = "Input text string";
	var inputFieldSelector = "resizebleText";
	var outputDivSelector = "outputDiv";
	// write text to input field
	document.getElementById(inputFieldSelector).value = inputText;
	// copy text to outputdiv
	copyText(outputDivSelector, inputFieldSelector);
	// get output div text
	var outputText = document.getElementById(outputDivSelector).innerHTML;
	console.log(outputText);
	// asset if output div text is identical input field text
	chai.assert(inputText === outputText, 'copied text is different');
  });
});