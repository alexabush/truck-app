import React, { Component } from 'react';

class Truck extends Component {
  render() {
    return (
      <div>
        <p>{this.name}</p>
        <img src={this.img} alt="" />
      </div>
    );
  }
}

export default Truck;
