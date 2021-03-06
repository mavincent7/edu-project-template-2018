import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import configure from './store';
import Header from "./Header";
import Episodes from "./Episodes";
import EpisodeDetail from "./EpisodeDetail";
import './global.scss';

const store = configure();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <div className="container">
              <Route exact path='/' component={Episodes}/>
              <Route path="/:id" component={EpisodeDetail}/>
            </div>
            <ToastContainer position="top-left"/>
          </div>
        </Router>
      </Provider>
    );
  }
};
