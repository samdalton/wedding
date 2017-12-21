import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

import './App.css';
import reducers from './redux/reducers';
import { copy, setLanguage } from './copy';

import { Home } from './pages/home';
import { WhenWhere } from './pages/when-where';
import { FlightsAccommo } from './pages/flights-accommo';
import { AttireColors } from './pages/attire-colors';
import { Activities } from './pages/activities';
import { Gifts } from './pages/gifts';

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Link = (props) => <NavLink activeClassName="active" className="item" {...props} />;


class StaticApp extends Component {
  componentWillMount() {
    setLanguage(this.props.user.language || 'en-us');
  }

  componentDidMount() {
    amplitude.getInstance().setUserProperties(this.props.user); // eslint-disable-line
  }

  render () {
    return (
    <Router>
        <div className="container">
          <div className="navigation">
            <Link exact to="/">Home</Link>
            <Link to="/when-where">When &amp; Where</Link>
            <Link to="/flights-accommodation">Flights &amp; Accommodation</Link>
            <Link to="/attire-colors">{copy.attireLabel}</Link>
            <Link to="/gifts">Gifts</Link>
            <Link to="/activities">Activities</Link>
          </div>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/when-where" component={WhenWhere} />
            <Route exact path="/flights-accommodation" component={FlightsAccommo} />
            <Route exact path="/attire-colors" component={AttireColors} />
            <Route exact path="/gifts" component={Gifts} />
            <Route exact path="/activities" component={Activities} />
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
