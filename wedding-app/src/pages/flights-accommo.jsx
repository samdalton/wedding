import React from 'react';

import Wrapper from './wrapper';
import Link from './tracked-link';

export const Flights = () => (
  <Wrapper page="flights">
    <h1>Flights &amp; Accommodation</h1>
    <p>
      You will be arriving to Hawaii at <Link href="http://airports.hawaii.gov/hnl/">Honolulu International Airport</Link>.{' '}
      There are plenty of rental car options at the airport (<Link className="subtext" href="https://www.hipmunk.com/cars#pl=HNL;dl=HNL;pd=2018-10-02;dd=2018-10-07;pt=12:00PM;dt=12:00PM;is_search_for_business=false">see options here</Link>), and it is strongly recommended to pick one up. There are buses out to the North Shore, but to really make the most of the what Oahu has to offer, you'll want your own car.
    </p>

    <h2>Flights</h2>
    <p>
      If you book with Hawaiian Airlines, you'll receive 5% off each roundtrip flight. If 25 of our friends and family use this code, we'll get upgraded to first class ;)
      Visit our link here on <Link href="https://apps.hawaiianairlines.com/specialevents/CosmosWeddingWings/Login/Guest/">Hawaiian Airlines</Link> and use the code <strong>{process.env.REACT_APP_WEDDING_WINGS_CODE}</strong>, last name <strong>Dalton</strong>.
    </p>

    <h2>Accomodation</h2>
    <p>
      We have block pricing available at the <Link href={process.env.REACT_APP_TURTLE_BAY_URL}>Turtle Bay Resort</Link>. The price is $279/night and the resort fee will be covered by us. While a bit pricer than airbnbs around, it will be the pickup location for the wedding shuttles and other social gatherings such as dinner the night before, so you'll be at the heart of the action.
    </p>
    <p>
      There are also plenty of AirBnB houses on the North Shore that are close to the venue. See availability <Link href="https://www.airbnb.com/s/North-Shore-Oahu-Hawaii--Kahuku--HI--United-States/homes?refinement_path=%2Ffor_you&allow_override%5B%5D=&ne_lat=21.727897864222932&ne_lng=-157.95872054797792&sw_lat=21.54162203284362&sw_lng=-158.11252914172792&zoom=12&search_by_map=true&checkin=2018-10-02&checkout=2018-10-07&s_tag=dLSBOgNt">on AirBnB</Link>.
    </p>
  </Wrapper>
);

export const FlightsAccommo = Flights;
