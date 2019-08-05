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
      <>
      <section className="App">
        <h1>Message Feed!</h1>



      
        {this.props.reduxStore.messageReducer.map(message => {
          return <div key={message.message}>
            <p>Bar Name: {message.name}</p>
            <p>Time: {message.timestamp}</p>
            <p>Message: {message.message}</p>
        </div>
        })}       
      </section>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
