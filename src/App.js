import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Parent from './component/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './redux/reducer'

import thunk from 'redux-thunk';




function App() {
  const store=createStore(combineReducers , applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Parent} />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;