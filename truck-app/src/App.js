import React, { Component } from 'react';
import './App.css';
import NewTruckList from './NewTruckList';
import NewTruckForm from './NewTruckForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trucks: []
    };
    this.addTruck = this.addTruck.bind(this);
  }

  addTruck(newTruck) {
    this.setState(prevState => {
      return { trucks: [...prevState.trucks, newTruck] };
    });
  }

  render() {
    return (
      <div className="App">
        <NewTruckForm addTruck={this.addTruck} />
        <NewTruckList key={0} trucks={this.state.trucks} />
      </div>
    );
  }
}

export default App;
