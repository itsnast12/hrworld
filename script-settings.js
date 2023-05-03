document.querySelector(".signin").addEventListener("click", ()=>{
  document.querySelector(".dropdown-list2").classList.toggle("dropdown-list--visible");
})

document.querySelector(".down").addEventListener("click", ()=>{
  document.querySelector(".dropdown-list1").classList.toggle("dropdown-list--visible");
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





