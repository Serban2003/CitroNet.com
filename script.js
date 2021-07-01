// JavaScript Document
function showImage(imageId){

	let showcaseDiv = document.createElement("div");
	showcaseDiv.id = "showcaseDiv";
	showcaseDiv.className = "showcase_div";
	showcaseDiv.classList.add("show_showcase_div");
	document.body.appendChild(showcaseDiv);
	
	let image = document.createElement("img");
	image.className = "image_showcase";
	image.src = "images/" + imageId + ".jpg";
	
	let closeButton = document.createElement("div");
	closeButton.innerHTML = "x";
	closeButton.className = "close_button";
	closeButton.addEventListener("click", closeDiv);
	showcaseDiv.appendChild(closeButton);
	
	showcaseDiv.appendChild(image);
}

function closeDiv(){
	document.body.removeChild(document.getElementById("showcaseDiv"));
}