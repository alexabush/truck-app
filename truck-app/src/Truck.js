import React, { Component } from 'react';

class Truck extends Component {
  render() {
    return (
      <div className="Truck">
        <p>{this.props.name}</p>
        <img src={this.props.img} alt="" />
      </div>
    );
  }
}

export default Truck;
