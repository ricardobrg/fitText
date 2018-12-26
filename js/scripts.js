// check for session persistence 
persistChanges();
// listen to text input changes
document.getElementById("resizebleText").addEventListener('keyup', function(e){
	textChange("resizebleText");
});
// listen to range slider changes
document.getElementById('textBoxRange').addEventListener('input', function(e) {
	rangeChange('textBoxRange','outputDiv');
});