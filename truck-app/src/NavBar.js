import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <p>Nav Bar</p>
        {this.props.isShow ? (
          <Link to="/new">Add New Truck!</Link>
        ) : (
          <Link to="/">See all Trucks!</Link>
        )}
      </div>
    );
  }
}

export default NavBar;
