import React, { Component } from 'react';
import Wrapper from './wrapper';
import cookie from 'js-cookie';

export class RSVP extends Component {
  constructor() {
    super();

    this.state = {
      responded: cookie.get('rsvpd'),
    };

    this.handleResponse = this.handleResponse.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleResponse(going) {
    amplitude.getInstance().logEvent('rsvp', { going }); // eslint-disable-line
    const identify = new amplitude.Identify().set('rsvp', going); // eslint-disable-line
    amplitude.getInstance().identify(identify); // eslint-disable-line
    this.setState({ responded: true });
    cookie.set('rsvpd', true);
  }

  handleReset() {
    this.setState({ responded: false });
    cookie.set('rsvpd', false);
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
        <a onClick={() => { this.handleResponse('yes'); }} className="block">Count us in!</a>
        <a onClick={() => { this.handleResponse('no'); }} className="block">Unfortunately can't make it</a>
      </div>
    );
  }

  render() {
    return (
      <Wrapper page="rsvp">
        <h1>RSVP</h1>
        <p>To help us with our planning, we'd love to know as early as possible if you're going to make it or not.</p>
        <p>If you're still waiting to decide, that's fine! We'll follow up closer to the event with a formal RSVP.</p> 
        <p>Otherwise, click one of the options below to let us know.</p>
        { this.state.responded ? this.renderThanks() : this.renderOptions() }
      </Wrapper>
    );
  }
}
