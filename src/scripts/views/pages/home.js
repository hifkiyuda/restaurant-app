import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createRestaurantOfTheMonthTemplate } from '../templates/template-creator';
import rotm from '../../utils/rotm.json';

const Home = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__title" tabindex="0">Explore Restaurant</h2>
        <div class="content__inner" id="restaurant"></div>
      </section>
      <section class="restaurant__of__the__month">
        <h2 class="rotm__title" tabindex="0">Restaurant of The Month</h2>
        <div class="rotm__inner" id="rotmContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurant();
    const restaurantContainer = document.getElementById('restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const restaurantOTM = rotm.restaurantOfTheMonth;
    const rotmContainer = document.getElementById('rotmContainer');
    restaurantOTM.forEach((rotm) => {
      rotmContainer.innerHTML += createRestaurantOfTheMonthTemplate(rotm);
    });
  },
};

export default Home;
