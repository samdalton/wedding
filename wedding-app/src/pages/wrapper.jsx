import React, { Component } from 'react';
import { connect } from 'react-redux'

class Wrapper extends Component {
  componentDidMount() {
    amplitude.getInstance().logEvent('PAGE_VIEW', { // eslint-disable-line
      page: this.props.page,
    });
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
