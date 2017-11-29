import React from 'react';
import { connect } from 'react-redux'

export const Flights = ({ user }) => (
  <section>
    <h1>Flights &amp; Accommodation</h1>
    <p>
      You will be arriving to Hawaii at <a href="http://airports.hawaii.gov/hnl/" target="blank" rel="noreferrer noopener">Honolulu International Airport</a>.{' '}
      There are plenty of rental car options at the airport (<a className="subtext" href="https://www.hipmunk.com/cars#pl=HNL;dl=HNL;pd=2018-10-02;dd=2018-10-07;pt=12:00PM;dt=12:00PM;is_search_for_business=false" target="blank" rel="noopener noreferrer">see options here</a>), and it is strongly recommended to pick one up. There are buses out to the North Shore, but to really make the most of the what Oahu has to offer, you'll want your own car.
    </p>

    <p>
      If you book with Hawaiian Airlines, you'll receive 5% off each roundtrip flight. If 25 of our friends and family use this code, we'll get upgraded to first class ;)
      Visit our link here: <a href="https://apps.hawaiianairlines.com/specialevents/CosmosWeddingWings/Login/Guest/" target="blank" rel="noopener noreferrer">flight search</a> and use the code <strong>{process.env.REACT_APP_WEDDING_WINGS_CODE}</strong>, last name <strong>Dalton</strong>.
    </p>

    <p>
      We have block pricing avaialable at the <a href="http://www.turtlebayresort.com/" target="blank" rel="noopener noreferrer">Turtle Bay Resort</a>. There are also plenty of AirBnB houses on the North Shore that are close to the venue. See availability <a href="https://www.airbnb.com/s/North-Shore-Oahu-Hawaii--Kahuku--HI--United-States/homes?refinement_path=%2Ffor_you&allow_override%5B%5D=&ne_lat=21.727897864222932&ne_lng=-157.95872054797792&sw_lat=21.54162203284362&sw_lng=-158.11252914172792&zoom=12&search_by_map=true&checkin=2018-10-02&checkout=2018-10-07&s_tag=dLSBOgNt" target="blank" rel="noopener noreferrer">on AirBnB</a>.
    </p>
  </section>
);

export const FlightsAccommo = connect(state => state)(Flights);