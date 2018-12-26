function persistChanges(){
	if (sessionStorage.getItem('fontSize') != null){
		var fontSize = sessionStorage.getItem('fontSize');
		var textInput = sessionStorage.getItem('textInput');
		var rangeWidth = sessionStorage.getItem('rangeWidth');
		document.getElementById("outputDiv").style.fontSize = fontSize +"px";
		document.getElementById("outputDiv").innerHTML = textInput;
		document.getElementById("resizebleText").value = textInput;
		document.getElementById('textBoxRange').value  = rangeWidth;
		document.getElementById("outputDiv").style.width = sessionStorage.getItem('rangeWidth')+"%";
		document.getElementById("textBoxWidth").innerHTML = rangeWidth;
	}
}