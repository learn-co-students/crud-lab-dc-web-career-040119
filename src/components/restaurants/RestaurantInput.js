import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super() 
    this.state = {
      text:""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({text:""})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.setState({text:event.target.value})}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};



export default RestaurantInput
