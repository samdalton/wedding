import React from 'react';

import us from '../images/us.jpg';
import Wrapper from './wrapper';

export const Home = () => (
  <Wrapper page="home">
    <h1>Angela and Sam</h1>
    <p>Welcome to our wedding website!</p>
    <p>Here you will find everything you need to know about attending our wedding on <time>October 5th, 2018</time>.</p>
    <img
      className="postcard-image"
      src={us}
      alt="hibiscus"
      width={640}
    />
  </Wrapper>
);
