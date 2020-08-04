var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});

window.addEventListener('mousemove', mouseMove);


function mouseMove(e) {
	
	// Minimum & Maximum font weight
	const minFontWeight = 150;
	const maxFontWeight = 450;

	const minFontWidth = 450;
	const maxFontWidth = 450;


	// Minimum and Maximum viewport size
	const maxX = window.innerWidth;
	const minX = 0;

	const maxY = window.innerHeight;
	const minY = 0;
	
	// Get current viewport size
	const xpos = e.clientX;
	const ypos = e.clientY;
	
	//Scale within a range
	const percentX = (xpos - minX) / (maxX - minX);
	const percentY = (ypos - minY) / (maxY - minY);

	const fontWeightScale = percentX * (minFontWeight - maxFontWeight) + maxFontWeight;
	const fontWidthScale = percentY * (minFontWidth - maxFontWidth) + maxFontWidth;

	// Get the new font weight
	const newWeight = xpos > maxX
	   ? minFontWeight 
       : xpos < minX
   			? maxFontWeight 
   			: fontWeightScale;

   	const newWidth = ypos > maxY
	   ? minFontWidth 
       : ypos < minY
   			? maxFontWidth 
   			: fontWidthScale;
	   
		// Set my CSS Custom Property for weight to update.
     	h1.style.setProperty("--width", newWidth);
     	h1.style.setProperty("--weight", newWeight);
}



function variableHeight() {
	
	// Minimum & Maximum font weight
	const minFontWeight = 200;
	const maxFontWeight = 1;
	
	// Minimum and Maximum viewport size
	const maxWindowHeight = 730;
	const minWindowHeight = 000;
	
	// Get current viewport size
	const windowHeight = window.innerHeight
	
	//Scale within a range
	const percent = (windowHeight - minWindowHeight) / (maxWindowHeight - minWindowHeight);
	const fontWeightScale = percent * (minFontWeight - maxFontWeight) + maxFontWeight;
      
	// Get the new font weight
	const newWeight = windowHeight > maxWindowHeight
	   ? minFontWeight 
       : windowHeight < minWindowHeight 
   			? maxFontWeight 
   			: fontWeightScale;
	   
		// Set my CSS Custom Property for weight to update.
     	h1.style.setProperty("--weight", newWeight);
}

function variableWidth() {
	
	// Minimum & Maximum font weight
	const minFontWidth = 200;
	const maxFontWidth = 1;
	
	// Minimum and Maximum viewport size
	const maxWindowWidth = 800;
	const minWindowWidth = 650;
	
	// Get current viewport size
	const windowWidth = window.innerWidth
	
	//Scale within a range
	const percent = (windowWidth - minWindowWidth) / (maxWindowWidth - minWindowWidth);
	const fontWidthScale = percent * (minFontWidth - maxFontWidth) + maxFontWidth;
      
	// Get the new font weight
	const newWidth = windowWidth > maxWindowWidth
	   ? minFontWidth 
       : windowWidth < minWindowWidth 
   			? maxFontWidth 
   			: fontWidthScale;
	   
		// Set my CSS Custom Property for weight to update.
     	h1.style.setProperty("--width", newWidth);
}

window.addEventListener("resize", variableWidth);
window.addEventListener("resize", variableHeight);