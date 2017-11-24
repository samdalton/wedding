import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import './App.css';
import { copy, setLanguage } from './copy';

import { Home } from './pages/home';
import { WhenWhere } from './pages/when-where';
import { FlightsAccommo } from './pages/flights-accommo';
import { AttireColors } from './pages/attire-colors';
import { Activities } from './pages/activities';
import { Gifts } from './pages/gifts';
import { Note } from './pages/note';

const Link = (props) => <NavLink activeClassName="active" className="item" {...props} />;

setLanguage('en-us');

export const App = (props) => (
  <Router>
    <div className="container">
      <div className="navigation">
        <Link exact to="/">Home</Link>
        <Link to="/when-where">When &amp; Where</Link>
        <Link to="/flights-accommodation">Flights &amp; Accommodation</Link>
        <Link to="/attire-colors">{copy.attireLabel}</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/leave-a-note">Leave a note</Link>
      </div>

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/when-where" component={WhenWhere} />
        <Route exact path="/flights-accommodation" component={FlightsAccommo} />
        <Route exact path="/attire-colors" component={AttireColors} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/gifts" component={Gifts} />
        <Route exact path="/leave-a-note" component={Note} />
      </div>
    </div>
  </Router>
);
