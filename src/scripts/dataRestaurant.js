/* eslint-disable linebreak-style */
import data from '../DATA.json';

const dataRestaurant = () => {
  let listRestaurant = '';
  data.restaurants.forEach((restaurant) => {
    listRestaurant += `
        <div class="list__restaurant">
            <img tabindex="0" src="${restaurant.pictureId}" alt="${restaurant.name} image"/>
            <h3 class='restaurant__name'><a href="#">${restaurant.name}</a></h3>
            <h5 tabindex="0" class='restaurant__description'>${restaurant.description}</h5>
            <p tabindex="0">${restaurant.city}</p>
            <p tabindex="0">${restaurant.rating}</p>
        </div>
        `;
  });

  document.querySelector('.list').innerHTML = listRestaurant;
};

export default dataRestaurant;
