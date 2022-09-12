"use strict"
const isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhon|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

const buttonBody = document.querySelector('.btn');
function addToCart(event) {
	if (event.target.closest('.btn')) {
		buttonBody.classList.toggle('_active');
	}
}
function setBack(event) {
	setTimeout(function () {
		buttonBody.classList.remove('_active');
	}, 2000);

}
if (isMobile.any()) {
	const btnMobile = document.getElementById('button');
	btnMobile.classList.add('_touch');
	buttonBody.addEventListener('pointerdown', addToCart);
	buttonBody.addEventListener('pointerleave', setBack);
}
else {
	document.body.classList.add('_pc');
	buttonBody.addEventListener("click", addToCart);
	buttonBody.addEventListener('mouseleave', setBack);
}
