import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';
import reducers from './redux/reducers';
import { setLanguage } from './copy';

import { Home } from './pages/home';
import { WhenWhere } from './pages/when-where';
import { FlightsAccommo } from './pages/flights-accommo';
import { AttireColors } from './pages/attire-colors';
import { Activities } from './pages/activities';
import { Gifts } from './pages/gifts';
import { RSVP } from './pages/rsvp';
import Nav from './nav';

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class StaticApp extends Component {
  componentWillMount() {
    setLanguage(this.props.user.language || 'en-us');
  }

  componentDidMount() {
    amplitude.getInstance().setUserProperties(this.props.user); // eslint-disable-line
    amplitude.getInstance().setUserId(this.props.user.apiKey); // eslint-disable-line
  }

  render () {
    return (
    <Router>
        <div className="container">
          <Nav />

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/when-where" component={WhenWhere} />
            <Route exact path="/flights-accommodation" component={FlightsAccommo} />
            <Route exact path="/attire-colors" component={AttireColors} />
            <Route exact path="/gifts" component={Gifts} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/rsvp" component={RSVP} />
          </div>
        </div>
      </Router>
    );
  }
};

StaticApp.defaultProps = {
  user: {},
}

const Main = connect(state => state)(StaticApp);
export const App = (props) => (
  <Provider store={store}>
    <Main { ...props } />
  </Provider>
);
