




let active = [0, 1, 2]
const sliderItems = document.querySelectorAll('.slider-item')
const render = () => {
	sliderItems.forEach(sliderItem => sliderItem.dataset.status = 'hidden')
	active.map((item, index) => { 
		sliderItems[item].dataset.status = 'active' 
	})
}
const previous = () => {
	if (active[0] > 0) {
		active[0] = active[0] - 1
		active[1] = active[1] - 1
		active[2] = active[2] - 1
	} else {
		console.log("end of list")
	}
	render()
}
const next = () => {
	if (active[2] < 5) {
		active[0] = active[0] + 1
		active[1] = active[1] + 1
		active[2] = active[2] + 1
	} else {
		console.log("end of list")
	}
	render()
}
