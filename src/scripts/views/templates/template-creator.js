import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__poster lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}" />
      <div class="movie-item__content">
        <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      </div>
      <div class="restaurant-item__rating">
        <p>${restaurant.city}</p>
        <p>⭐️<span>${restaurant.rating}</span></p>
      </div>
      <div class="restaurant-item__description">
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LG + restaurant.pictureId}" alt="${restaurant.name}" />
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <div class="restaurant__description">
    <h3>Desription</h3>
    <p>${restaurant.description}</p>
    <div class="menu">
      <h4>Menu Catagories</h4>
      <p>${restaurant.categories.map((category) => category.name).join(' , ')}</p>
      <h4>Foods</h4>
      <p>${restaurant.menus.foods.map((food) => food.name).join(' , ')}</p>
      <h4>Drinks</h4>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' , ')}</p>
    </div>
    <h4>Location</h4>
    <p>${restaurant.address} , ${restaurant.city}</p>
    <h4>Cafe Rating</h4>
    <p>⭐️<span>${restaurant.rating}</span></p>
  </div>
  <div class="customer-reviews">
  <h3>Customer Reviews</h3>
  <ul>${restaurant.customerReviews.map((customerReview) => customerReview.review).join(' || ')}</ul>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
