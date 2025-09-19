let container = document.querySelector(".container");

for(let i=1; i<=800; i++) {
	let box = document.createElement("div");
	box.className = "square";
	container.appendChild(box);
}

let boxes = document.querySelectorAll(".square");

for (let box of boxes) {
	box.addEventListener("mouseover", getColor);
	box.addEventListener("mouseout", getDefaultColor);
}

function getColor(e) {
	let selectedBox = e.target;
	selectedBox.style.backgroundColor = randomColor();
}

function getDefaultColor(e) {
	let selectedBox = e.target;
	setTimeout(()=>{
		selectedBox.style.backgroundColor = "#1d1d1d";
	},1000)
}

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}


