import React from 'react';

import { copy } from '../copy';
import Wrapper from './wrapper';

export const Activities = () => (
  <Wrapper page="activities">
    <h1>Activities</h1>
    <p>We know you're coming a long way to celebrate with us, so here are some our of {copy.favourite} suggestions to make the most of the trip.</p>
    <h2>Food</h2>
    <ul>
      <li>
        <a href="https://www.yelp.com/biz/giovannis-shrimp-truck-kahuku" rel="noopener noreferrer" target="_blank">Giovanni's Shrimp Truck</a>
      </li>
      <li>
      <a href="https://www.yelp.com/biz/crispy-grindz-haleiwa" rel="noopener noreferrer" target="_blank">Crispy Grindz</a>
      </li>
      <li>
      <a href="https://www.yelp.com/biz/no7-japanese-food-truck-haleiwa" rel="noopener noreferrer" target="_blank">No7 Japanese Food Truck</a>
      </li>
    </ul>

    <h2>Hikes/Drives</h2>
    <ul>
      <li>
        <a href="https://www.alltrails.com/trail/us/hawaii/pupukea-summit-trail--2" rel="noopener noreferrer" target="_blank">Pupukea Trail</a>
      </li>
      <li>
        <a href="https://www.alltrails.com/trail/us/hawaii/diamond-head-leahi-summit-trail" rel="noopener noreferrer" target="_blank">Diamond Head Summit Trail</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Interstate_H-3" rel="noopener noreferrer" target="_blank">Interstate H3 to Kaneohe</a>
      </li>
    </ul>
      
    <h2>Activities</h2>
    <ul>
      <li>
        <a href="https://www.pacificaviationmuseum.org/" rel="noopener noreferrer" target="_blank">Pearl Harbor Museum</a>
      </li>
      <li>
        <a href="http://byodo-in.com/" rel="noopener noreferrer" target="_blank">Byodo-in Buddhist Temple</a>
      </li>
      <li>
        <a href="https://www.google.com/maps/place/Three+Tables+Beach/@21.6456992,-158.0633244,17z/data=!4m13!1m7!3m6!1s0x7c006632db726b03:0xd9587d69906fcbc3!2zT-KAmGFodQ!3b1!8m2!3d21.4389123!4d-158.0000565!3m4!1s0x7c005993bc6084ab:0xbdd6c5c996e7c995!8m2!3d21.6459381!4d-158.0638942?hl=en" rel="noopener noreferrer" target="_blank">Three Tables Beach (great for small children)</a>
      </li>

    </ul>
  </Wrapper>
);

