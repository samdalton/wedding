import React from 'react';

export const WhenWhere = () => (
  <section>
    <h1>When &amp; Where</h1>
    <p>The Wedding Day events will all be taking place at the lovely <a href="https://www.sunsetranchhawaii.com/" target="_blank" rel="noopener noreferrer">Sunset Ranch</a>, Oahu, Hawaii.
    </p>
    <p>
      The date is <time>Friday the 5th of October, 2018</time>.{' '}
      <a className="subtext" href={`${process.env.PUBLIC_URL}/invite.ics`}>(Download calendar event)</a>
    </p>
    <p>Arrive at <time>3:30pm</time> for a <time>4pm</time> ceremony start time. The event will end at <time>9pm</time>.</p>

    <h2>Map of Venue</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.5579637427654!2d-158.02792499999998!3d21.642142000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c005a3eeeb9a727%3A0x4587a6ae83cc7273!2sSunset+Ranch+Hawaii!5e0!3m2!1sen!2sus!4v1511552101374" width="600" height="450" frameborder="0" title="map" style={{border: 0}} allowfullscreen></iframe>
  </section>
);


