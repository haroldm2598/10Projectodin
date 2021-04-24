const menuBar = document.querySelector('.menu-bar');
const headerList = document.querySelector('#header__list');
const year = document.querySelector('#year');
const minutes = document.querySelector('#minutes');
const hour1 = document.querySelector('#hour1');
const hour2 = document.querySelector('#hour2');
const hour3 = document.querySelector('#hour3');
const hour4 = document.querySelector('#hour4');
const hour5 = document.querySelector('#hour5');
const hour6 = document.querySelector('#hour6');
const hour7 = document.querySelector('#hour7');

menuBar.addEventListener('click', appear);

function appear() {
	headerList.classList.toggle('appear');
}

const todayYear = new Date().getFullYear();
year.textContent = `2012-${todayYear}`;

function minutesRandom() {
	var random = Math.round(Math.random() * 30);
	return (minutes.textContent = random);
}

function hourRandom1() {
	var random = Math.round(Math.random() * 2) + 1;
	return (hour1.textContent = random);
}

function hourRandom2() {
	var random = Math.round(Math.random() * 3) + 2;
	return (hour2.textContent = random);
}

function hourRandom3() {
	var random = Math.round(Math.random() * 5) + 3;
	return (hour3.textContent = random);
}

function hourRandom4() {
	var random = Math.round(Math.random() * 6) + 4;
	return (hour4.textContent = random);
}

function hourRandom5() {
	var random = Math.round(Math.random() * 9) + 7;
	return (hour5.textContent = random);
}

function hourRandom6() {
	var random = Math.round(Math.random() * 10) + 8;
	return (hour6.textContent = random);
}

function hourRandom7() {
	var random = Math.round(Math.random() * 11) + 10;
	return (hour7.textContent = random);
}

window.addEventListener('load', loadData);

function loadData() {
	minutesRandom();
	hourRandom1();
	hourRandom2();
	hourRandom3();
	hourRandom4();
	hourRandom5();
	hourRandom6();
	hourRandom7();
}
