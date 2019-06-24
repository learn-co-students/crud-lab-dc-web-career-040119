import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {text:''}

  submitRestaurant = (e) => {
      e.preventDefault()
      this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <form onSubmit={this.submitRestaurant} >
        <h1>Gnu Rishtrtrunt</h1>
        <input onChange={e=>this.setState({text: e.target.value})} type="text"/>
        <input type="submit"/>
      </form>
    );
  }
};

export default RestaurantInput;
