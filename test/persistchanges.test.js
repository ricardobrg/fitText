describe('persistChanges', function () {
  it('should get persisted data in browser.', function () {
	var fontSize = '50'; 
	var textInput = 'just some testing text';
	var rangeWidth = '98';
	sessionStorage.setItem('fontSize', fontSize);
	sessionStorage.setItem('textInput', textInput);
	sessionStorage.setItem('rangeWidth', rangeWidth);
	persistChanges();
	chai.assert.strictEqual(document.getElementById("outputDiv").innerHTML, textInput, "outputDiv text was not persisted");
	chai.assert.strictEqual(document.getElementById("resizebleText").value, textInput, "resizebleText text was not persisted");
	chai.assert.strictEqual(document.getElementById("textBoxRange").value, rangeWidth, "textBoxRange text was not persisted");
	chai.assert.strictEqual(document.getElementById("outputDiv").style.width, rangeWidth+"%", "outputDiv width was not persisted");
	chai.assert.strictEqual(document.getElementById("textBoxWidth").innerHTML, rangeWidth, "textBoxWidth text was not persisted");
  });
});