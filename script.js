const arrowIcons = document.querySelectorAll(".scrollbutton");
const slider = document.querySelector(".wrapper");
const firstCard = document.querySelectorAll(".myteam")[0];

let firstCardWidth = firstCard.clientWidth + 16.5;

arrowIcons.forEach(button => {
	button.addEventListener("click", () => {
		slider.scrollLeft += button.id == "left" ? -firstCardWidth : firstCardWidth;
	});
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
	anchor.addEventListener("click", (event) =>{
		event.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			// block: "balances"
		})
	})
}


// let buttonsmenu = document.querySelector(".js-buttonsmenu");
// let buttonsmenuH = document.querySelector(".js-buttonsmenu").clientHeight;

// document.onscroll = function() {
// 	let scroll = window.scrollY;
// 	console.log(scroll)

// 	if (scroll > 1 ){
// 		buttonsmenu.classList.add("fixed");
// 	}
// }

document.querySelector(".signin").addEventListener("click", ()=>{
	document.querySelector(".dropdown-list2").classList.toggle("dropdown-list--visible");
})

document.querySelector(".down").addEventListener("click", ()=>{
	document.querySelector(".dropdown-list1").classList.toggle("dropdown-list--visible");
})