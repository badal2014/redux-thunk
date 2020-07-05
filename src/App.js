import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/reducer'

import thunk from 'redux-thunk';
import Main from './component/main';
import DetailPage from './component/DetailPage';




function App() {
  const store = createStore(combineReducers, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/Dashboard" component={Main} />
          <Route exact path="/ItemDetails" component={DetailPage} />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;