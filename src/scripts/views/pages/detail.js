import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createLikeButtonTemplate, createRestaurantDetailTemplate, createRestaurantReviewsTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="detail__inner" id="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewContainer = document.querySelector('.review__list');
    restaurant.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createRestaurantReviewsTemplate(review);
    });

    const favoriteContainer = document.querySelector('.favorite__container');
    favoriteContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
