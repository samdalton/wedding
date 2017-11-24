import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import { copy, setLanguage } from './copy';

import { Home } from './pages/home';
import { WhenWhere } from './pages/when-where';
import { FlightsAccommo } from './pages/flights-accommo';

setLanguage('en-us');

export const App = (props) => (
  <Router>
    <div className="container">
      <div className="navigation">
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/when-where">When &amp; Where</Link>
        <Link className="item" to="/flights-accommodation">Flights &amp; Accommodation</Link>
        <Link className="item" to="/attire-colors">{copy.attireLabel}</Link>
        <Link className="item" to="/activities">Activities</Link>
        <Link className="item" to="/gifts">Gifts</Link>
        <Link className="item" to="/leave-a-note">Leave a note</Link>
      </div>

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/when-where" component={WhenWhere} />
        <Route exact path="/flights-accommodation" component={FlightsAccommo} />
      </div>
    </div>
  </Router>
);
