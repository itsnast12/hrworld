const arrowIcons = document.querySelectorAll(".scrollbutton");
const slider = document.querySelector(".wrapper");
const firstCard = document.querySelectorAll(".packages_slider")[0];

let firstCardWidth = firstCard.clientWidth + 15;

arrowIcons.forEach(button => {
	button.addEventListener("click", () => {
        console.log('hellk')
		slider.scrollLeft += button.id == "left" ? -firstCardWidth : firstCardWidth;
	});
});