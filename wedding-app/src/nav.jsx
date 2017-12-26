import React from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
} from 'react-router-dom';

import { toggleNav } from './redux/actions';

import { copy } from './copy';
import Flower from './flower';
import hamburger from './images/hamburger.svg';

const Nav = ({
  flags = {},
  toggleNav,
}) => {
  const Link = (props) => (
    <NavLink
      activeClassName="active"
      className="item"
      onClick={toggleNav}
      {...props}
    />
  );

  return (
    <div>
      <div className="nav-menu" onClick={toggleNav}>
        <img src={hamburger} alt="menu" />
      </div>
      <div className={`navigation ${flags.showNav ? 'show' : ''}`}>
        <Link exact to="/">Home</Link>
        <Link to="/when-where">When &amp; Where</Link>
        <Link to="/flights-accommodation">Flights &amp; Accommodation</Link>
        <Link to="/attire-colors">{copy.attireLabel}</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/things-to-do">Things To Do</Link>
        <Link to="/rsvp">RSVP</Link>
        <Flower />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNav: () => dispatch(toggleNav()),
});
export default connect(state => state, mapDispatchToProps)(Nav);
