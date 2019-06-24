import React, { Component } from 'react';
import Reviews from './Reviews';
import { EventEmitter } from 'events';

class ReviewInput extends Component {

  constructor() {
    super()
    this.state = {
      text:""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    let newReview = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    this.props.addReview(newReview)

    this.setState({text:""})
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.setState({text:event.target.value})}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
