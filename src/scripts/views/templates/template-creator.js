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
      <p tabindex='0'>${restaurant.description}</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <article class='detail__item'>
    <div class='detail__image__wrapper'>
      <img class='detail__image' src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}' alt='${restaurant.name}'>
    </div>
    <div class='detail__body'>
      <h2 tabindex='0'>${restaurant.name}</h2>
      <p class='detail__rating' tabindex='0'>Rating: ${restaurant.rating}</p>
      <p class='detail__location' tabindex='0'>Location: ${restaurant.city}</p>
      <p tabindex='0'>${restaurant.description}</p>
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

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantOfTheMonthTemplate,
};
