
import cuid from 'cuid';
import {combineReducers} from 'redux'
export const cuidFn = cuid;

function manageRestaurants(restaurants = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            let newRestaurant = {
                text: action.name,
                id: cuid()
            }
            return [...restaurants, newRestaurant];
        case "DELETE_RESTAURANT":
                return [...restaurants.filter(restaurant => restaurant.id !== action.id)];
        default:
            return restaurants
    }
}

function manageReviews(reviews = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            let newReview = action.review
            newReview.id = cuid()
            return [...reviews, newReview]
        case "DELETE_REVIEW":
            return [...reviews.filter(review => review.id !== action.id)]
        default:
            return reviews;
    }
}

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer


