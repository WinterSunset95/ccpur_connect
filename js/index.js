




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

const events = [
	{
	  date: 'Jan 1, 2021',
	  name: 'New Year Day',
	  image: "images/new-years.webp",
	},
	{
	  date: 'Feb 14, 2021',
	  name: 'Valentine Day',
	  image: "images/Valentine-s-Day.png",
	},
  ];
  
  const eventsContainer = document.getElementById('events');
  
  for (const event of events) {
	const eventElement = document.createElement('div');
	eventElement.classList.add('event');
  
	const eventDate = document.createElement('div');
	eventDate.classList.add('event-date');
	eventDate.textContent = event.date;
  
	const eventName = document.createElement('div');
	eventName.classList.add('event-name');
	eventName.textContent = event.name;
  
	const eventImage = document.createElement('img');
	eventImage.classList.add('event-image');
	eventImage.src = event.image;
  
	eventElement.appendChild(eventDate);
	eventElement.appendChild(eventImage);
	eventElement.appendChild(eventName);
  
	eventsContainer.appendChild(eventElement);
  }