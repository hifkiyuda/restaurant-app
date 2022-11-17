import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import {
  createFailedTemplate,
  createLikeButtonTemplate,
  createLoadingTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewsTemplate,
} from '../templates/template-creator';
import '../components/detail';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div class='loading__container'></div>
      <div class='favorite__container'></div>
      <detail-section class='detail__main__section'></detail-section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('.loading__container');
    const detailMainSection = document.querySelector('.detail__main__section');

    loadingContainer.innerHTML = createLoadingTemplate();
    detailMainSection.style.display = 'none';

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const restaurantContainer = document.getElementById('restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      // review
      const reviewContainer = document.querySelector('.review__list');
      restaurant.customerReviews.forEach((review) => {
        reviewContainer.innerHTML += createRestaurantReviewsTemplate(review);
      });

      const reviewerName = document.querySelector('.name__input');
      const reviewerReview = document.querySelector('.review__input');
      const submitReview = document.querySelector('.submit__review');

      submitReview.addEventListener('click', async (event) => {
        event.preventDefault();

        const reviewContent = {
          id: restaurant.id,
          name: reviewerName.value,
          review: reviewerReview.value,
        };

        const newReview = await RestaurantSource.addNewReview(reviewContent);
        const lastReview = newReview.customerReviews.slice(-1);
        lastReview.forEach((review) => {
          reviewContainer.innerHTML += createRestaurantReviewsTemplate(review);
        });
      });

      // favorite
      const favoriteContainer = document.querySelector('.favorite__container');
      favoriteContainer.innerHTML = createLikeButtonTemplate();

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('.favorite__container'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });

      detailMainSection.style.display = 'block';
      loadingContainer.style.display = 'none';
    } catch (error) {
      loadingContainer.innerHTML = createFailedTemplate(error);
    }
  },
};

export default Detail;
