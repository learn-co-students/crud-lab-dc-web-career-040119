import React, { Component } from 'react'
import {connect} from 'react-redux'

import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

import {addRestaurant} from "../actions/restaurantActions";

class RestaurantsContainer extends Component {


  render() {
      const {restaurants, addRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants
})

export default connect(mapStateToProps, { addRestaurant })(RestaurantsContainer)
