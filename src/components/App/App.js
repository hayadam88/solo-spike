import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {


  componentDidMount() {
    this.getMessages();
  }
  
  
  getMessages = () => {
      console.log('In getMessages');
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



        <ul>
        {this.props.reduxStore.messageReducer.map(message => {
          return <li key={message.id}>
       </li>
        })}
        </ul>        
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
