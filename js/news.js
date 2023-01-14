




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
		name: 'New Year\'s Day',
		image: '../images/new-years.webp',
	},
	{
		date: 'Feb 14, 2021',
		name: 'Valentine\'s Day',
		image: '../images/Valentine-s-Day.png',
	},
	{
		date: 'Mar 17, 2021',
		name: 'St. Patrick\'s Day',
		image: 'https://unsplash.it/600/400', // You can use this link when you want placeholder images
	},
];

// We are using a library called 'ReactJS' here
// Declaring a react component
function Events() {
	return (
		<div clasName="events-container">
			{
				// google search 'javascript array.map()'
				events.map(item => {
					// For every item in the 'events' array -
					return (
						<div className="event">
							<img className="event-image" src={item.image} alt="" />
							<div className="event-text">
								<div>{item.date}</div>
								<div>{item.name}</div>
								<div>Added new line</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

const eventsContainer = document.getElementById('events');
// Render 'Events' component to the specified element
ReactDOM.render(<Events />, eventsContainer)

window.addEventListener('load', function() {
    carouselRUN();
}, false);

function carouselRUN() {
    var carousel = document.getElementById("carousel");
    var scene = document.getElementById("scene");
    var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
    var carousel_btn = document.getElementById("carousel_btn");
    var n = carousel_items_Arrey.length;
    var curr_carousel_items_Arrey = 0;
    var theta = Math.PI * 2 / n;
    var interval = null;
    var autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener('resize', function() {
        clearInterval(interval);
        setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    }, false);
    setupNavigation();


    function setupCarousel(n, width) {
        var apothem = width / (2 * Math.tan(Math.PI / n));
        scene.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (i = 1; i < n; i++) {
            carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
        }

        if (autoCarousel === "true") {
            setCarouselInterval();
        }
    }

    function setCarouselInterval() {
        interval = setInterval(function() {
            curr_carousel_items_Arrey++;
            scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
        }, 3000);
    }

    function setupNavigation() {
        carousel_btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var target = e.target;

            if (target.classList.contains('next')) {
                curr_carousel_items_Arrey++;
            } else if (target.classList.contains('prev')) {
                curr_carousel_items_Arrey--;
            }
            clearInterval(interval);
            scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

            if (autoCarousel === "true") {
                setTimeout(setCarouselInterval(), 3000);
            }
        }, true);
    }
}
