import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar';
import data from '../DATA.json';
import rotm from './utils/rotm.json';

// restaurants data render
const contentExplore = document.getElementById('contentExplore');

contentExplore.innerHTML = '';

data.restaurants.forEach((restaurant) => {
  contentExplore.innerHTML += `
    <article class='content__item'>
      <div class='content__wrapper'>
        <p class='content__city' tabindex='0'>${restaurant.city}</p>
        <img class='content__image' src=${restaurant.pictureId} alt='${restaurant.name}'>
      </div>
      <div class='content__body'>
        <p tabindex='0'>Rating: ${restaurant.rating}</p>
        <h3 class='content__name' tabindex='0'>${restaurant.name}</h3>
        <p tabindex='0'>${restaurant.description}</p>
      </div>
    </article>
  `;
});

// restaurant of the month data render
// sumber data: website The Urban List
const rotmExplore = document.getElementById('rotmExplore');

rotmExplore.innerHTML = '';

rotm.restaurantOfTheMonth.forEach((rotm) => {
  rotmExplore.innerHTML += `
    <article class='rotm__item'>
      <div class='rotm__image__wrapper'>
        <img class='rotm__image' src='${rotm.pictureId}' alt='Restaurant of The Month'>
      </div>
      <div class='rotm__body'>
        <h3 tabindex='0'>${rotm.name}</h3>
        <p class='rotm__location' tabindex='0'>Location: ${rotm.location}</p>
        <p tabindex='0'>${rotm.description}</p>
        <br>
        <p tabindex='0'>Visit:</p>
        <a class='rotm__link' href='${rotm.link_satu}' target='_blank' tabindex='0'>The Urban List</a>
        <a class='rotm__link' href='${rotm.link_dua}' target='_blank' tabindex='0'>${rotm.name}</a>
      </div>
    </article>
  `;
})

// hamburger
const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
