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