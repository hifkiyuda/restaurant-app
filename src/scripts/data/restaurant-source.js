import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addNewReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
