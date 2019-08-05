import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

    getPizzas = () => {
      axios.get('/messages').then(response => {
        this.props.dispatch({
          type: 'SET_MESSAGES',
          payload: response.data
        });
      }).catch(err => {
        console.log(err);
      })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
