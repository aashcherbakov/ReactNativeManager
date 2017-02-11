import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCsJ1hF-rEEB22CE07rETPTXKbqyCQndNM",
      authDomain: "manager-792a3.firebaseapp.com",
      databaseURL: "https://manager-792a3.firebaseio.com",
      storageBucket: "manager-792a3.appspot.com",
      messagingSenderId: "66529146316"
    })
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm>
        </LoginForm>
      </Provider>
    );
  };
}

export default App;