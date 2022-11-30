/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contarct Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllFavorite()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteFavorite(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
