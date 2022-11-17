const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
  I.see('You don\'t have a favorite restaurant.', '.favorite__restaurants__is__empty');
  I.amOnPage('/');

  I.waitForElement('.content__name a');

  const firstRestaurant = locate('.content__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content__item');
  const likedRestaurantName = await I.grabTextFrom('.content__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
};

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('You don\'t have a favorite restaurant.', '.favorite__restaurants__is__empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  // menyukai dulu salah satu restaurant (first restaurant)
  await likingRestaurant({ I });

  // membatalkan menyukai restaurant
  I.seeElement('.content__name a');
  I.click('.content__name a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('You don\'t have a favorite restaurant.', '.favorite__restaurants__is__empty');
});
