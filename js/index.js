




const slider = document.querySelector('#slider')
const sliderItemsCount = slider.children.length - 1
const sliderItems = document.querySelectorAll('.slider-item')
let active
const render = () => {
	sliderItems.forEach(sliderItem => sliderItem.dataset.status = 'hidden')
	active.map((item, index) => { 
		sliderItems[item].dataset.status = 'active' 
	})
}
const init = () => {
	if (window.screen.width < 768) {
		active = [0]
	} else {
		active = [0, 1, 2]
	}
	render()
}
init()
window.addEventListener('resize', init)
const previous = () => {
	if (active[0] > 0) {
		for (let i = 0; i < active.length; i++) {
			active[i] = active[i] - 1
		}
	} else {
		console.log("end of list")
	}
	render()
}
const next = () => {
	if (active[active.length - 1] < sliderItemsCount) {
		for (let i = 0; i < active.length; i++) {
			active[i] = active[i] + 1
		}
	} else {
		console.log("end of list")
	}
	render()
}
