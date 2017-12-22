import React from 'react';

import { copy } from '../copy';
import Wrapper from './wrapper';
import Link from './tracked-link';

export const Activities = () => (
  <Wrapper page="activities">
    <h1>Activities</h1>
    <p>We know you're coming a long way to celebrate with us, so here are some our of {copy.favourite} suggestions to make the most of the trip.</p>
    <h2>Food</h2>
    <ul>
      <li>
        <Link href="https://www.yelp.com/biz/giovannis-shrimp-truck-kahuku">Giovanni's Shrimp Truck</Link>
      </li>
      <li>
      <Link href="https://www.yelp.com/biz/crispy-grindz-haleiwa">Crispy Grindz</Link>
      </li>
      <li>
      <Link href="https://www.yelp.com/biz/no7-japanese-food-truck-haleiwa">No7 Japanese Food Truck</Link>
      </li>
    </ul>

    <h2>Hikes/Drives</h2>
    <ul>
      <li>
        <Link href="https://www.alltrails.com/trail/us/hawaii/pupukea-summit-trail--2">Pupukea Trail</Link>
      </li>
      <li>
        <Link href="https://www.alltrails.com/trail/us/hawaii/diamond-head-leahi-summit-trail">Diamond Head Summit Trail</Link>
      </li>
      <li>
        <Link href="https://en.wikipedia.org/wiki/Interstate_H-3">Interstate H3 to Kaneohe</Link>
      </li>
    </ul>
      
    <h2>Activities</h2>
    <ul>
      <li>
        <Link href="https://www.pacificaviationmuseum.org/">Pearl Harbor Museum</Link>
      </li>
      <li>
        <Link href="http://byodo-in.com/">Byodo-in Buddhist Temple</Link>
      </li>
      <li>
        <Link href="https://www.google.com/maps/place/Three+Tables+Beach/@21.6456992,-158.0633244,17z/data=!4m13!1m7!3m6!1s0x7c006632db726b03:0xd9587d69906fcbc3!2zT-KAmGFodQ!3b1!8m2!3d21.4389123!4d-158.0000565!3m4!1s0x7c005993bc6084ab:0xbdd6c5c996e7c995!8m2!3d21.6459381!4d-158.0638942?hl=en">Three Tables Beach (great for small children)</Link>
      </li>

    </ul>
  </Wrapper>
);
