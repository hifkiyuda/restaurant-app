import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFailedTemplate, createLoadingTemplate, createRestaurantItemTemplate } from '../templates/template-creator';
import '../components/favorite';

const Favorite = {
  async render() {
    return `
      <div class='loading__container'></div>
      <favorite-section class='favorite__main__section'></favorite-section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('.loading__container');
    const favoriteMainSection = document.querySelector('.favorite__main__section');
    const restaurantsContainer = document.querySelector('#favoriteRestaurant');
    const favoriteText = '<i tabindex="0">You don\'t have a favorite restaurant.</i>';

    loadingContainer.innerHTML = createLoadingTemplate();
    favoriteMainSection.style.display = 'none';

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = favoriteText;
      }

      favoriteMainSection.style.display = 'block';
      loadingContainer.style.display = 'none';
    } catch (error) {
      loadingContainer.innerHTML = createFailedTemplate(error);
    }
  },
};

export default Favorite;
