import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <h1>Your Favorite Restaurants</h1>
      <div id="favorite" class="favorite"></div>
    </section>
    `;
  },

  async afterRender() {
    const RestaurantFavorite = await FavoriteRestaurantIdb.getAllFavorite();
    const favoriteContainer = document.querySelector('#favorite');

    RestaurantFavorite.forEach((favorite) => {
      favoriteContainer.innerHTML += createRestaurantItemTemplate(favorite);
    });
  },
};

export default Favorite;
