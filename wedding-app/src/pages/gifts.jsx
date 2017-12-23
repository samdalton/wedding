import React from 'react';
import Wrapper from './wrapper';

import Link from './tracked-link';

export const Gifts = () => (
  <Wrapper page="gifts">
    <h1>Gifts</h1>
    <p>You're already making our day by travelling across the world's largest ocean, but if you still feel so inclined, we have some options below.</p>

    <h2>Donate</h2>
    <p>
      <Link href="https://www.charitywater.org/donate">Charity: water</Link> is a worldwide organization bringing clean water to those who need it most in developing countries.
    </p>
    <p>
      <Link href="https://tippingpoint.org/#donate">Tipping Point</Link> is a non-profit that funds many local organizations helping those in poverty in the San Francisco Bay Area.
    </p>

    <p>If you choose to donate to either, be sure to let us know so we can send thanks!</p>

    <h2>Registry</h2>
    <p>
      View our <Link href="https://www.zola.com/registry/samandangelawedding">Gift Registry</Link>.
    </p>
  </Wrapper>
);

