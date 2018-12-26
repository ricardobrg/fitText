function rangeChange(rangeDivSelector,outputDivSelector){
	var range = document.getElementById('textBoxRange').value;
	document.getElementById("textBoxWidth").innerHTML = range;
	document.getElementById(outputDivSelector).style.width = range+"%";
	copyText("outputDiv","resizebleText");
	fitText("outputDiv");
}