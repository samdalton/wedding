import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from './wrapper';
import cookie from 'js-cookie';

class StaticRSVP extends Component {
  constructor(props) {
    super(props);

    const name = this.props.user && this.props.user.firstName;
    const parts = (name || "").split(' ').filter((n) => n !== 'and');

    this.state = {
      responded: cookie.get('rsvpd'),
      count: parts.length,
    };

    this.handleResponse = this.handleResponse.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUpCount = this.handleUpCount.bind(this);
    this.handleDownCount = this.handleDownCount.bind(this);
  }

  handleResponse() {
    const going = this.state.count > 0;

    amplitude.getInstance().logEvent('rsvp', { going, count: this.state.count }); // eslint-disable-line
    const identify = new amplitude.Identify().set('rsvp', going).set('rsvp_count', this.state.count); // eslint-disable-line
    amplitude.getInstance().identify(identify); // eslint-disable-line
    this.setState({ responded: true });
    cookie.set('rsvpd', true);
  }

  handleUpCount() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDownCount() {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  }

  handleReset() {
    this.setState({ responded: false });
    cookie.set('rsvpd', false);
    amplitude.getInstance().logEvent('change-rsvp'); // eslint-disable-line
  }

  renderThanks() {
    return (
      <div>
        <p>Thanks for responding!</p>
        <a onClick={this.handleReset} className="subtext">(change my response)</a>
      </div>
    )
  }

  renderOptions() {
    return (
      <div className="rsvp">
        <div className="counter">
          <span className="stepper" onClick={this.handleDownCount}>-</span>
          <span className="rsvp-count" >{this.state.count}</span>
          <span className="stepper" onClick={this.handleUpCount}>+</span>
        </div>
        <a onClick={this.handleResponse}>Submit</a>
      </div>
    );
  }

  render() {
    return (
      <Wrapper page="rsvp">
        <h1>Can we expect you?</h1>
        <p>To help us with our planning, we'd love to know as early as possible if you're going to make it or not.</p>
        <p>Let us know how many people to expect (including yourself), and then click submit. If you can't make it, put 0 and submit.</p>
        { this.state.responded ? this.renderThanks() : this.renderOptions() }
        <p style={{ marginTop: 36 }}>If you're still waiting to decide, that's okay. We'll follow up in March with a formal invite and RSVP.</p> 
      </Wrapper>
    );
  }
}

export const RSVP = connect(state => state)(StaticRSVP);
