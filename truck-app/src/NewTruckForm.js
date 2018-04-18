import React, { Component } from 'react';

class NewTruckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //debugger;
    this.props.addTruck({ ...this.state });
    this.setState({ name: '', img: '' });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Truck Name: </label>
        <input
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="img">Image Url: </label>
        <input
          id="img"
          name="img"
          onChange={this.handleChange}
          value={this.state.img}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTruckForm;
