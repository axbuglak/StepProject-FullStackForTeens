document.querySelector(".arrow-up").addEventListener('click', () => {
	window.scrollTo(0, 0)
	document.querySelector('.arrow-up').classList.toggle('active')
})
// BASKET
const allProducts = document.querySelector('.all-products')
const resultSum = []
const shoppingCart = document.querySelector('.shopping-cart')
const basket = document.querySelector('.basket')
const sum = document.querySelector('.result-sum')
const basketButton = document.querySelector('.basket-button')
shoppingCart.addEventListener('click', () => {
	basket.classList.toggle('active')
	document.querySelector('.header-h1').classList.toggle('active')
})
basketButton.addEventListener('click', () => {
	sum.textContent = `вся сумма: ${resultSum.map(i=>x+=i, x=0).reverse()[0]}`
})

// BURGER_MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach(item => {
		item.classList.toggle('fade');
	});
	lines[0].classList.toggle('top');
	lines[1].classList.toggle('medium');
	lines[2].classList.toggle('bot');
});

const menuBurgerOfferDay = document.getElementById('menuBurgerOfferDay')
const menuBurgerMenu = document.getElementById('menuBurgerMenu')
const menuBurgerAbout = document.getElementById('menuBurgerAbout')
const menuBurgerPersenolyCab = document.getElementById('menuBurgerPersenolyCab')
const menuBurgerSupport = document.getElementById('menuBurgerSupport')
menuBurgerOfferDay.addEventListener('click', () => {
	window.scrollTo(680, 680)
	navLinks.classList.remove('open');
	links.forEach(item => {
		item.classList.remove('fade');
	});
	lines[0].classList.remove('top');
	lines[1].classList.remove('medium');
	lines[2].classList.remove('bot');
})
menuBurgerMenu.addEventListener('click', () => {
	window.scrollTo(1340, 1340)
	navLinks.classList.remove('open');
	links.forEach(item => {
		item.classList.remove('fade');
	});
	lines[0].classList.remove('top');
	lines[1].classList.remove('medium');
	lines[2].classList.remove('bot');
})
menuBurgerAbout.addEventListener('click', () =>{
	document.querySelector('.about-us').classList.toggle('active')
	navLinks.classList.remove('open');
	links.forEach(item => {
		item.classList.remove('fade');
	});
	lines[0].classList.remove('top');
	lines[1].classList.remove('medium');
	lines[2].classList.remove('bot');
})
document.querySelector('.x-cross-about-us').addEventListener('click', () => {
	document.querySelector('.about-us').classList.remove('active')
})
// BURGER_CITY
const burgerCityArray = document.querySelector('.burger-city-array');
const citiesLinks = document.querySelector('.cities-links')
const cities = document.querySelectorAll('.cities-links li')
const burgerCity = document.querySelector('.header-burger-city-par');
const map = document.querySelector('.map div')
// function cityPromt() {
// 		const cityAsk = alert('Ваш город Киев?')
// 		if (cityAsk === true){
// 				burgerCity.textContent = cities[0]
// 				map.style.content = 'url(./img/cities-map/kiev-map2-cover-medium.jpg)'
// 			}
// 			else {
// 					alert('Укажите свой город')
// 				}
// 				return burgerCity
// 			}
// 			cityPromt()
			function headerBurerCity() {
				burgerCityArray.addEventListener('click', () => {
					citiesLinks.classList.toggle('open');
					cities.forEach(item => {
						item.classList.toggle('open');
					});
					burgerCityArray.classList.toggle('active')
					
				});
				cities[0].addEventListener('click', () => {
					burgerCity.textContent = cities[0].textContent
					map.style.content = 'url(./img/cities-map/kiev-map2-cover-medium.jpg)'
					citiesLinks.classList.remove('open')
					burgerCityArray.classList.remove('active')
				})
				cities[1].addEventListener('click', () => {
					burgerCity.textContent = cities[1].textContent
					map.style.content = 'url(./img/cities-map/Odessa.jpg)'
					citiesLinks.classList.remove('open')
					burgerCityArray.classList.remove('active')
				})
				cities[2].addEventListener('click', () => {
					burgerCity.textContent = cities[2].textContent
					map.style.content = 'url(./img/cities-map/Lviv.jpg)'
					citiesLinks.classList.remove('open')
					burgerCityArray.classList.remove('active')
				})
				cities[3].addEventListener('click', () => {
					burgerCity.textContent = cities[3].textContent
					map.style.content = 'url(./img/cities-map/Harkov.jpg)'
					citiesLinks.classList.remove('open')
					burgerCityArray.classList.remove('active')
				})
				cities[4].addEventListener('click', () => {
					burgerCity.textContent = cities[4].textContent
					map.style.content = 'url(./img/cities-map/Chernigov.jpg)'
					citiesLinks.classList.remove('open')
					burgerCityArray.classList.remove('active')
				})
				return burgerCity
			}
			headerBurerCity()
			
			// SECTION OFFER OF DAY
			const buttonOfferBuy = document.querySelector('#buttonOfferBuy')
			buttonOfferBuy.addEventListener('click', () => {
				buttonOfferBuy.style.backgroundColor = 'rgb(61, 61, 61, 1)';
				buttonOfferBuy.style.transition = "0.5s";
				resultSum.push(199)
			})
			
			//MENU 
			const menuButOne = document.getElementById('menuButtonOne')
			const menuButTwo = document.getElementById('menuButtonTwo')
			const menuButThree = document.getElementById('menuButtonThree')
			const menuButFour = document.getElementById('menuButtonFour')
			const menuButFive = document.getElementById('menuButtonFive')
			const menuButSix = document.getElementById('menuButtonSix')
			const priceNameDish = document.createElement('li')
			menuButOne.addEventListener('click', () => {
				menuButOne.style.color = 'rgba(253, 190, 97, 1)'
				menuButOne.style.transition = "0.5s";
				resultSum.push(300)
			})
			menuButTwo.addEventListener('click', () => {
				menuButTwo.style.color = 'rgba(253, 190, 97, 1)'
				menuButTwo.style.transition = "0.5s";
				resultSum.push(219)
			})
			menuButThree.addEventListener('click', () => {
				menuButThree.style.color = 'rgba(253, 190, 97, 1)'
				menuButThree.style.transition = "0.5s";
				resultSum.push(219)
			})
			menuButFour.addEventListener('click', () => {
				menuButFour.style.color = 'rgba(253, 190, 97, 1)'
				menuButFour.style.transition = "0.5s";
				resultSum.push(249)
			})
			menuButFive.addEventListener('click', () => {
				menuButFive.style.color = 'rgba(253, 190, 97, 1)'
				menuButFive.style.transition = "0.5s";
				resultSum.push(235)
			})
			menuButSix.addEventListener('click', () => {
				menuButTwo.style.color = 'rgba(253, 190, 97, 1)'
				menuButTwo.style.transition = "0.5s";
				resultSum.push(139)
			})
			