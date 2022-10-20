import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar';
import data from '../DATA.json';

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
