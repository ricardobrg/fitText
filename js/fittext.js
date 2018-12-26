function fitText(outputSelector){
	// max font size in pixels
	const maxFontSize = 50;
	// get the DOM output element by its selector
	let outputDiv = document.getElementById(outputSelector);
	// get element's width
	let width = outputDiv.clientWidth;
	// get content's width
	let contentWidth = outputDiv.scrollWidth;
	// get fontSize
	let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);
	// if content's width is bigger then elements width - overflow
	if (contentWidth > width){
		fontSize = Math.ceil(fontSize * width/contentWidth,10);
		fontSize =  fontSize > 50 ? fontSize = 50 : fontSize - 1;
		outputDiv.style.fontSize = fontSize+'px';	
	}else{
		// content is smaller then width... let's resize in 1 px until it fits 
		while (contentWidth === width && fontSize < maxFontSize){
			fontSize = Math.ceil(fontSize) + 1;
			fontSize = fontSize > 50 ? fontSize = 50 : fontSize;
			outputDiv.style.fontSize = fontSize+'px';	
			// update widths
			width = outputDiv.clientWidth;
			contentWidth = outputDiv.scrollWidth;
			if (contentWidth > width){
				outputDiv.style.fontSize = fontSize-1+'px';	
			}
		}
	}
	// save data for persistence over page reloads
	sessionStorage.setItem('fontSize', fontSize);
	sessionStorage.setItem('textInput',outputDiv.innerHTML);
	// check if textBoxRange is defined
	if (document.getElementById('textBoxRange').value != null){
		sessionStorage.setItem('rangeWidth',textBoxRange.value);
	}
}