import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';

import { Photos } from './pages/photos';

export const App = () => (
  <Router>
    <div className="container">
      <div className="content">
        <Route exact path="/" component={Photos} />
        <Route exact path="/photos" component={Photos} />
      </div>
    </div>
  </Router>
);
