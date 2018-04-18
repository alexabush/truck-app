import React, { Component } from 'react';

class NewTruckForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      src: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTruck({ ...this.state });
    this.setState({ name: '', src: '' });
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
        <label htmlFor="src">Image Url: </label>
        <input
          id="src"
          name="src"
          onChange={this.handleChange}
          value={this.state.src}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default NewTruckForm;
