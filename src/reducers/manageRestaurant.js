
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: []}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.restaurants, {id: cuid(), text: action.text}]}
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        default:
            return state
    }
}
