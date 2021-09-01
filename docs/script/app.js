let mobileNavIsVisible = false;

let closeBtn, menuBtn, mobileNav;

const listenToMobileMenu = () => {
	closeBtn.addEventListener('click', function () {
		handleMenuChange();
	});

	menuBtn.addEventListener('click', function () {
		handleMenuChange();
	});

    mobileNav.addEventListener('click', function(){
        mobileNavIsVisible = false;
    })
};

const handleMenuChange = () => {
	mobileNavIsVisible
		? mobileNav.classList.remove('is-visible')
		: mobileNav.classList.add('is-visible');

	mobileNavIsVisible = !mobileNavIsVisible;
};

document.addEventListener('DOMContentLoaded', function () {
	closeBtn = document.querySelector('.js-mobile-nav__close');
	menuBtn = document.querySelector('.js-menu-btn');
	mobileNav = document.querySelector('.js-mobile-nav');

	listenToMobileMenu();
});
