import React from 'react';

import breakfast from '../images/breakfast.png';
import Wrapper from './wrapper';
import Link from './tracked-link';

export const WhenWhere = () => (
  <Wrapper page="when">
    <h1>When &amp; Where</h1>
    <h2>The Day Before - Thursday the 4th of October 2018</h2>
    <p>We will be having a casual afternoon get-together the Thursday before the wedding so we can unwind and relax before the big day ahead.</p>
    <p>Join us for snacks and refreshments any time between 2pm and 5pm at our Turtle Bay Condo:</p>
    <p style={{ paddingLeft: 20 }}>57-77 Lalo Kuilima Pl
      Kahuku , HI 96731</p>
    <p>We won't have space for everyone at once, so feel free to come and go as you please throughout the afternoon. We will likely grab dinner in the resort later on which we'll largely be playing by ear - this is Hawaii after all!</p>
    <p>If you have trouble finding our place, give Sam or Angela a call at +! 415 483 5962 and +1 925 899 8340 respectively.</p>
    <h2>The Wedding Day - Friday the 5th of October 2018</h2>
    <p>The wedding day events will all be taking place at the lovely <Link href="https://www.sunsetranchhawaii.com/">Sunset Ranch</Link>, on the North Shore of the Hawaiian island, Oahu.
    </p>
    <p>
      The date is <time>Friday the 5th of October, 2018</time>.{' '}
      <a className="subtext" href="/static/invite.ics">(Download calendar event)</a>
    </p>
    <p>Be at Turtle Bay Resort at <time>3pm</time> for shuttles to the venue. The ceremony will start at <time>4pm</time>. The event will end at <time>9pm</time> with shuttles to return you back to Turtle Bay for further salubriations at the hotel bar.</p>
    <p>The shuttle is the only option to getting to the venue due to narrow roads and limited parking. You can find it on the map at <Link href="https://www.google.com/maps/place/Turtle+Bay+Resort/@21.7013641,-157.9891112,15z/data=!4m12!1m6!3m5!1s0x7c00504fe1e96419:0x1ee8f68b7f5c0bec!2sTurtle+Bay+Resort!8m2!3d21.704397!4d-157.9979769!3m4!1s0x7c00504fe1e96419:0x1ee8f68b7f5c0bec!8m2!3d21.704397!4d-157.9979769?hl=en">Turtle Bay Resort</Link>.</p>
    <p>Our wedding is children friendly and they'll have plenty of space to run around and entertain themselves.</p>

    <h2>Map of Wedding Venue</h2>
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.5579637427654!2d-158.02792499999998!3d21.642142000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c005a3eeeb9a727%3A0x4587a6ae83cc7273!2sSunset+Ranch+Hawaii!5e0!3m2!1sen!2sus!4v1511552101374"
      width="600"
      height="450"
      frameborder="0"
      title="map"
      style={{border: 0}}
    ></iframe>
    <h2>The Day After - Saturday the 6th of October 2018</h2>
    <p>Join us on the main beach at Turtle Bay Resort from 10am onwards to eat fresh local pastries and trade stories from the prior celebrations!</p>
    <img
      src={breakfast}
      alt="Breakfast on the main beach at Turtle Bay"
      width={640}
    />
  </Wrapper>
);
