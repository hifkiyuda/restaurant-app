import RestaurantSource from '../../data/restaurant-source';
import {
  createFailedTemplate,
  createLoadingTemplate,
  createRestaurantItemTemplate,
  createRestaurantOfTheMonthTemplate,
} from '../templates/template-creator';
import rotm from '../../utils/rotm.json';
import '../components/hero';
import '../components/restaurant';

const Home = {
  async render() {
    return `
      <hero-element class='hero'></hero-element>
      <div class='loading__container'></div>
      <restaurant-section class='restaurant__main__section'></restaurant-section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('.loading__container');
    const restaurantMainSection = document.querySelector('.restaurant__main__section');
    const restaurantContainer = document.getElementById('restaurant');
    const rotmContainer = document.getElementById('rotmContainer');

    loadingContainer.innerHTML = createLoadingTemplate();
    restaurantMainSection.style.display = 'none';

    try {
      const restaurants = await RestaurantSource.getRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      // restaurant of the month data render
      // sumber data: website The Urban List
      const restaurantOTM = rotm.restaurantOfTheMonth;
      restaurantOTM.forEach((rotm) => {
        rotmContainer.innerHTML += createRestaurantOfTheMonthTemplate(rotm);
      });

      restaurantMainSection.style.display = 'block';
      loadingContainer.style.display = 'none';
    } catch (error) {
      loadingContainer.innerHTML = createFailedTemplate(error);
    }
  },
};

export default Home;
