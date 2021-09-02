let mobileNavIsVisible = false;

let closeBtn, menuBtn, mobileNav;

const listenToMobileMenu = () => {
	closeBtn.addEventListener('click', function () {
		handleMenuChange();
	});

	menuBtn.addEventListener('click', function () {
		handleMenuChange();
	});

	const items = document.querySelectorAll('.c-mobile-nav__link');
	for (const i of items) {
		i.addEventListener('click', function () {
			mobileNav.classList.remove('is-visible');
		});
	}
};

const handleMenuChange = () => {
	const body = document.querySelector('body');
	if (mobileNavIsVisible) {
		mobileNav.classList.remove('is-visible');
		body.style = 'overflow: initial;';
	} else {
		mobileNav.classList.add('is-visible');
		body.style = 'overflow: hidden;';
	}

	mobileNavIsVisible = !mobileNavIsVisible;
};

document.addEventListener('DOMContentLoaded', function () {
	closeBtn = document.querySelector('.js-mobile-nav__close');
	menuBtn = document.querySelector('.js-menu-btn');
	mobileNav = document.querySelector('.js-mobile-nav');

	listenToMobileMenu();
});
