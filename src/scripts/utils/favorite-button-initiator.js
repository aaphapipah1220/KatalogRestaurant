import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteButtonTemplate, createUnfavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    // console.log(this._restaurant);
    if (await this._isRestaurantExist(id)) {
      this._renderUnfavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getFavorite(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putFavorite(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnfavorite() {
    this._favoriteButtonContainer.innerHTML = createUnfavoritedButtonTemplate();

    const unfavoriteButton = document.querySelector('#unfavoriteButton');
    unfavoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteFavorite(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
