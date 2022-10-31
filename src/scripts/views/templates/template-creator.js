import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class='content__item'>
    <div class='content__wrapper'>
      <p class='content__city' tabindex='0'>${restaurant.city}</p>
      <img class='content__image' src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt='${restaurant.name}'>
    </div>
    <div class='content__body'>
      <p tabindex='0'>Rating: ${restaurant.rating}</p>
      <h3 class='content__name'><a tabindex='0' href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p class='content__description' tabindex='0' maxlength='50'>${restaurant.description}</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article class='detail__item'>
    <div class='detail__image__wrapper'>
      <img class='detail__image' src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}' alt='${restaurant.name}'>
      <div class='favorite__container'></div>
    </div>
    <div class='detail__body'>
      <h2 tabindex='0'>${restaurant.name}</h2>
      <p class='detail__rating' tabindex='0'>Rating: ${restaurant.rating}</p>
      <p class='detail__location' tabindex='0'>Location: ${restaurant.address}, ${restaurant.city}</p>
      <p tabindex='0'>${restaurant.description}</p>
    </div>
    <div class='restaurant__categories'>
      <strong>Category:</strong>
      ${restaurant.categories.map((category) => `
        <p>${category.name}</p>
      `)}
    </div>
    <div class='restaurant__menus'>
      <strong>Menus:</strong>
      <br>
      <p>Foods: ${restaurant.menus.foods.map((food) => `${food.name}`)}</p>
      <br>
      <p>Drinks: ${restaurant.menus.drinks.map((drink) => `${drink.name}`)}<p>
    </div>
    <div class='restaurant__reviews'>
      <strong>Customer Reviews:</strong>
      <div class='review__list'></div>
    </div>
  </article>
`;

const createRestaurantOfTheMonthTemplate = (rotm) => `
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

const createRestaurantReviewsTemplate = (review) => `
  <div class='review__item'>
    <p class='review__date'>${review.date}</p>
    <p class='review__body'><strong>${review.name}:</strong> ${review.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Add this restaurant to favorite" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Remove this restaurant from favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantOfTheMonthTemplate,
  createRestaurantReviewsTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
