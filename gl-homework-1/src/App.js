import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    films: 
      [{
        name: 'Film 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5,
        image: ''
      },
      {
        name: 'Film 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 2,
        image: ''
      },
      {
        name: 'Film 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 4,
        image: ''
      }],
      selectedId: null
    };
    
    this.selectFilm = this.selectFilm.bind(this);
    this.updateFilm = this.updateFilm.bind(this);
  }
  
  updateFilm(e, name, description, rating, image) {
    e.preventDefault();
    const { films, selectedId } = this.state;

    this.setState({
      films: [
        ...films.slice(0, selectedId),
        {
          name,
          description,
          rating,
          image
        },
        ...films.slice(selectedId+1)
      ],
      selectedId: null
    })
  }
  
  selectFilm(id) {
    this.setState({ selectedId: id });
  }

  render() {
    const { films, selectedId } = this.state;
    
    return (
      <div className="App">
        <List films={films} selectedId={selectedId} selectFilm={this.selectFilm} />
        <hr />
        {selectedId !== null &&
          <Form film={films[selectedId]} updateFilm={this.updateFilm} />
        }
      </div>
    );
  }
}

export default App;
