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
      responded: cookie.get('rsvpd-final'),
      count: parts.length,
      comment: '',
    };

    this.handleResponse = this.handleResponse.bind(this);
    this.handleUpCount = this.handleUpCount.bind(this);
    this.handleDownCount = this.handleDownCount.bind(this);
    this.captureText = this.captureText.bind(this);
  }

  captureText(e) {
    this.setState({comment: e.target.value});
  }

  handleResponse() {
    const going = this.state.count > 0;

    amplitude.getInstance().logEvent('rsvp', { going, count: this.state.count }); // eslint-disable-line
    const identify = new amplitude.Identify() // eslint-disable-line
      .set('rsvp', going)
      .set('rsvp_comment', this.state.comment)
      .set('rsvp_count', this.state.count);
    amplitude.getInstance().identify(identify); // eslint-disable-line
    this.setState({ responded: true });
    cookie.set('rsvpd-final', true);
  }

  handleUpCount() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDownCount() {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  }

  renderThanks() {
    return (
      <div>
        <p>Thanks for responding!</p>
        <p>If you need to change your RSVP, please let us know <a href="mailto:sam@dalton.kiwi">via email</a>.</p>
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
        <p>Anything else we should know (food allergies, witty joke, etc.)?</p>
        <div>
          <textarea id="rsvp-comment" onChange={this.captureText} />
        </div>
        <a onClick={this.handleResponse}>Submit RSVP</a>
      </div>
    );
  }

  render() {
    return (
      <Wrapper page="rsvp">
        <h1>RSVP</h1>
        <p>Coming to the wedding? Let us know! This is our official RSVP page – no need to mail anything else to us.</p>
        <p>Enter the number of people attending (including yourself), and then click submit. If you can't make it, put 0 and submit.</p>
        { this.state.responded ? this.renderThanks() : this.renderOptions() }
      </Wrapper>
    );
  }
}

export const RSVP = connect(state => state)(StaticRSVP);
