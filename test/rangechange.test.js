describe('rangeChangeTest', function () {
  it('should change the width of outputDiv based on range slider value', function () {
	var range = Math.floor(Math.random() * Math.floor(100));
	document.getElementById('textBoxRange').value = range;
	rangeChange('textBoxRange','outputDiv');
	chai.assert.strictEqual(document.getElementById("textBoxWidth").innerHTML , range.toString(), "textBoxWidth is not equal range");
	chai.assert.strictEqual(document.getElementById("outputDiv").style.width , range+"%", "outputDiv width is not equal range");
});
});