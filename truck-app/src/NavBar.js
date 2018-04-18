import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   this.props.togglePage();
  // }

  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <a className="navbar-brand" href="#">
      //     <i className="fas fa-truck-moving" />
      //     <span className="ml-1">truckU</span>
      //   </a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav-item">
      //         <Link to="/new" className="nav-link">
      //           add new truck
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link">
      //           all trucks
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      <nav className="navbar bg-primary navbar-dark">
        {/* <p>Nav Bar</p> */}
        {/* {this.props.isShow ? ( */}
        <p className="text-white">
          <Link to="/new">Add New Truck!</Link>
        </p>
        {/* ) : ( */}
        <p className="text-white">
          <Link to="/">See all Trucks!</Link>
        </p>
        {/* )} */}
      </nav>
    );
  }
}

export default NavBar;
