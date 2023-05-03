document.querySelector(".signin").addEventListener("click", ()=>{
	document.querySelector(".dropdown-list2").classList.toggle("dropdown-list--visible");
})

document.querySelector(".down").addEventListener("click", ()=>{
	document.querySelector(".dropdown-list1").classList.toggle("dropdown-list--visible");
})

const arrowIcons = document.querySelectorAll(".scrollbutton");
const slider = document.querySelector(".wrapper");
const firstCard = document.querySelectorAll(".packages_slider")[0];

let firstCardWidth = firstCard.clientWidth + 15;

arrowIcons.forEach(button => {
	button.addEventListener("click", () => {
		slider.scrollLeft += button.id == "left" ? -firstCardWidth : firstCardWidth;
	});
});
