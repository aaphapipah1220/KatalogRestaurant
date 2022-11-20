import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomeList = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">List Restaurants</h2>
            <div id="restaurants" class="restaurants">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default HomeList;
