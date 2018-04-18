import React, { Component } from 'react';
import Truck from './Truck';

class TruckList extends Component {
  render() {
    ;
    const trucks = this.props.trucks.map(({ name, img }, index) => {
      return <Truck key={index} name={name} img={img} />;
    });
    return <div>{trucks}</div>;
  }
}

export default TruckList;
