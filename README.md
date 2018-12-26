# fitText

fitText is a a JavaScript solution to make a variable length text fit inside a container's width.

## How it works ##
The index HTML page presents at the top a div (“output div”) with a 1px visible border and height of 50px. Lower in the page there's a form with a text input and a range slider input.

The output div displays the text of the form’s input. When the text is updated the output div’s text is also updated.

The slider changes the width of the output div.

The purpose of the solution is to “fit” the input text into the div in one line (no line breaks) within the div height and using the maximum possible integer font-size.

When the text length or the output div's width changes, the fitText function increases or decreases output div's font-size in order to fit the text in one line with the biggest integer font-size value.

## How to use ##
- Include the file js/fitText.js in your project.
- Use the function fitText(outputDivSelector) to fit the text of the outputDiv (outputDivSelector is the id of the div where the text should fit)

## Unit tests ##
This package includes unit testing. Tests resides at "tests" folder and can be loaded with index.test.html.

## Improvements ##
One of the things that I have kept in mid while developing this solution is to make it as simpler and as vanilla as possible. That's why some improvements are possible and could be implemented in the future:
- Set a minimum width for output div based on font-size in order to keep content readeble.
- Set a minimum font-size and break lines or activate scroll to keep content readeble. 
- Include random content in unit testing to test different inputTexts
