const arrowIcons = document.querySelectorAll(".scrollbutton");
const slider = document.querySelector(".wrapper");
const firstCard = document.querySelectorAll(".myteam")[0];

if (firstCard) {
  let firstCardWidth = firstCard.clientWidth + 16.5;
}

arrowIcons.forEach((button) => {
  button.addEventListener("click", () => {
    slider.scrollLeft += button.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      // block: "balances"
    });
  });
}


let elem = document.querySelector(".dropdown-list2")

document.querySelector(".signin").addEventListener("click", (e) => {
	elem.classList.toggle("dropdown-list--visible");
});

document.querySelector(".down").addEventListener("click", (e) => {
  e.stopPropagation();
  document
    .querySelector(".dropdown-list1")
    .classList.toggle("dropdown-list--visible");
});

document.querySelector(".subj").addEventListener("click", (e) => {
	e.stopPropagation();
	document
	  .querySelector(".dropdown-list3")
	  .classList.toggle("dropdown-list--visible");
  });



document.addEventListener('click', (e)=>{
  if (e.target !== document.querySelector(".signin")){
    document
    .querySelector(".dropdown-list2")
    .classList.remove("dropdown-list--visible");
  }
})

document.addEventListener('click', (e)=>{
	if (e.target !== document.querySelector(".down")){
	  document
	  .querySelector(".dropdown-list1")
	  .classList.remove("dropdown-list--visible");
	}
  })

  document.addEventListener('click', (e)=>{
	if (e.target !== document.querySelector(".subj")){
		console.log("ff")
	  document
	  .querySelector(".dropdown-list3")
	  .classList.remove("dropdown-list--visible");
	}
  })