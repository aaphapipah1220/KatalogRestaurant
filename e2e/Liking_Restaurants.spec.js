/* eslint-disable no-unused-vars */
const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('restaurant-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('restaurant-item');

  I.amOnPage('/');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking a restaurant', ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.wait(5);
  I.dontSeeElement('restaurant-item');
  I.dontSeeElement('.restaurant__title a');
});
