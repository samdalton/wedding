import React, { Component } from 'react';
import { connect } from 'react-redux'

class Wrapper extends Component {
  componentDidMount() {
    const page = this.props.page;
    amplitude.getInstance().logEvent(`page view:${page}`); // eslint-disable-line
  }

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
};

export default connect(state => state)(Wrapper);
