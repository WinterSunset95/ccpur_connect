






let slider;
let width;
let scrollNum;
const setSlider = (id) => {
	slider = document.getElementById(id);
	width = slider.scrollWidth;
	scrollNum = width / slider.children.length;
}
const next = (id) => {
	setSlider(id);
	slider.scrollBy(scrollNum, 0);
}
const prev = (id) => {
	setSlider(id);
	slider.scrollLeft -= scrollNum;
}

document.querySelectorAll('.slider-button').forEach(button => {
	button.addEventListener('mousedown', () => {
		button.classList.add('button-active');
	},
	button.addEventListener('mouseup', () => {
		button.classList.remove('button-active');
	})
)})
