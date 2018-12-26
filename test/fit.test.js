describe('fitText', function(){
  it('should adjust the text to outputDiv size', function () {
	var inputFieldSelector = "resizebleText";
	var outputDivSelector = "outputDiv";
	var inputText = "really big input text to test the fitText function and check if it is working";
	// write text to input field
	document.getElementById(inputFieldSelector).value = inputText;
	// write text to outputdiv
	document.getElementById(outputDivSelector).innerHTML = inputText;
	// run fitText
	fitText("outputDiv");
	// get element's width
	let width = document.getElementById(outputDivSelector).clientWidth;
	// get content's width
	let contentWidth = document.getElementById(outputDivSelector).scrollWidth;
	// assert that outputdiv content fits into outputdiv width
	chai.assert.isAtMost(contentWidth, width, 'content is bigger than container');
  });
});