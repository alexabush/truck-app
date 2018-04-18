import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import TruckList from './TruckList';
import NavBar from './NavBar';
import NewTruckForm from './NewTruckForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //why doesn't this work?
      // trucks: Array.from({ length: this.props.Trucks.length }).map(
      //   (element, index) => {
      //
      //     return { ...this.props.Trucks[index] };
      //   }
      // )
      trucks: props.Trucks.map(t => ({ ...t })),
      isShow: true
    };
    this.addTruck = this.addTruck.bind(this);
    this.togglePage = this.togglePage.bind(this);
  }

  addTruck(newTruck) {
    //debugger;
    this.setState(prevState => {
      return { trucks: [...prevState.trucks, newTruck] };
    });
  }

  togglePage() {
    this.setState(prevState => {
      let newState = { ...prevState };
      return { isShow: !newState.isShow };
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar togglePage={this.togglePage} isShow={this.state.isShow} />
        <h1>Truck App</h1>
        <Route
          path="/"
          exact
          component={() => <TruckList key={0} trucks={this.state.trucks} />}
        />
        <Route
          path="/new"
          component={() => {
            return <NewTruckForm addTruck={this.addTruck} />;
          }}
        />
      </div>
    );
  }
}

App.defaultProps = {
  Trucks: [
    {
      name: 'Water Truck',
      img: 'https://i.ytimg.com/vi/_o01TaYWlcI/maxresdefault.jpg'
    },
    {
      name: 'Fire Truck',
      img:
        'https://img00.deviantart.net/97cf/i/2005/165/d/1/jet_powered_truck__by_blathering.jpg'
    },
    {
      name: 'Tall Truck',
      img: 'http://uploads.tapatalk-cdn.com/20140201/6aty6a7e.jpg'
    },
    {
      name: 'Fury Truck',
      img:
        'http://www.uncanny.ch/wp-content/uploads/2015/05/mad_max_fury_road_war_rig1-640x410.jpg'
    },
    {
      name: 'Rock Truck',
      img:
        'https://www.f150online.com/wp-content/uploads/2017/04/Ford-The-Rock.jpg'
    }
  ]
};

export default App;
