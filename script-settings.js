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



const tabItems = Array.from(document.querySelectorAll('.settings'))

const contentItems = Array.from(document.querySelectorAll('.content-item'))

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
		if (item.classList.contains('open')) return
  
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)
  })
}

const setActiveClass = (element, index, className = 'open') => {
  element[index].classList.add(`${ className }`)
}

const clearActiveClass = (element, className = 'open') => {
  element.find(item => item.classList.remove(`${ className }`))
}

tabItems.forEach(checkoutTabs)





