let mobileNavIsVisible = false;

let closeBtn, menuBtn, mobileNav, map, openinghours, body;

const provider =
		"https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
	copyright =
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>';

const listenToMobileMenu = () => {
	closeBtn.addEventListener("click", function () {
		handleMenuChange();
	});

	menuBtn.addEventListener("click", function () {
		handleMenuChange();
	});

	const items = document.querySelectorAll(".c-mobile-nav__link");
	for (const i of items) {
		i.addEventListener("click", function () {
			mobileNav.classList.remove("is-visible");
			body.style = "overflow: scroll;";
		});
	}
};

const handleMenuChange = () => {
	if (mobileNavIsVisible) {
		mobileNav.classList.remove("is-visible");
		body.style = "overflow: scroll;";
	} else {
		mobileNav.classList.add("is-visible");
		body.style = "overflow: hidden;";
	}

	mobileNavIsVisible = !mobileNavIsVisible;
};

const initMap = function () {
	map = L.map("map").setView([51.008826989131, 3.6299759253685053], 15);
	L.tileLayer(provider, { attribution: copyright }).addTo(map);
	let marker = L.marker([51.008826989131, 3.6299759253685053]).addTo(map);
	marker.bindPopup(
		`<h3>Kinderopvang Harlekijn</h3><a class="c-map-link" target="blank" href="https://www.google.be/maps/place/Guido+Gezellestraat+21,+9830+Sint-Martens-Latem/@51.008719,3.6278516,17z/data=!3m1!4b1!4m5!3m4!1s0x47c36d889975c025:0xa7e8cac5597284e4!8m2!3d51.008719!4d3.6300403">Open in Google Maps</a>`
	);
};

const showCurrentOpeningDay = () => {
	openinghours[new Date().getDay() - 1].classList.add("u-font-weight--bold");
};

document.addEventListener("DOMContentLoaded", function () {
	closeBtn = document.querySelector(".js-mobile-nav__close");
	menuBtn = document.querySelector(".js-menu-btn");
	mobileNav = document.querySelector(".js-mobile-nav");
	openinghours = document.querySelectorAll(".js-hour");
	body = document.querySelector("body");

	listenToMobileMenu();
	initMap();
	showCurrentOpeningDay();
});
