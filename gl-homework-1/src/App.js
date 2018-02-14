import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      rating: 1
    }
    
    this.onChangeField = this.onChangeField.bind(this);
  }
  
  onChangeField(event) {
    let newState = {};

    switch (event.target.name) {
      case 'name': newState = {name: event.target.value}; break;
      case 'description': newState = {description: event.target.value}; break;
      case 'rating': newState = {rating: event.target.value}; break;
      default:
    }

    this.setState(newState);
  }

  render() {
    const { name, description, rating } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="movieSummary">
          <p>Name: <b>{name || <i>empty</i>}</b></p>
          <p>Description: <b>{description || <i>empty</i>}</b></p>
          <p>Rating: <b>{rating}</b></p>
        </div>
        <hr />
        <form className="movieForm">
          <div className="formField">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" value={name} onChange={this.onChangeField} />
          </div>
          <div className="formField">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" value={description} onChange={this.onChangeField}></textarea>
          </div>
          <div className="formField">
            <label htmlFor="rating">Description:</label>
            <select name="rating" id="rating" onChange={this.onChangeField} defaultValue={rating}>
              {[1, 2, 3, 4, 5].map(v =>
                <option value={v} key={v}>{v}</option>
              )}
            </select> *
          </div>
        </form>
      </div>
    );
  }
}

export default App;
