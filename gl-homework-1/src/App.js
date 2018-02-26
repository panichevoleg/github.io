import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import List from './List';
import './App.css';

class App extends Component {

  render() {
    const { selectedId } = this.props;
    
    return (
      <div className="App">
        <List />
        <hr />
        {selectedId !== null &&
          <Form />
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  selectedId: state.selectedId,
})

export default connect(mapStateToProps)(App);
