import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import {connect} from "react-redux";
import {deleteRestaurant} from "../../actions/restaurantActions";

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default  connect(null, { deleteRestaurant })(Restaurant);
