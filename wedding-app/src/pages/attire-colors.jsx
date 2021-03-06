import React from 'react';

import { copy } from '../copy';
import Wrapper from './wrapper';

export const AttireColors = () => (
  <Wrapper page="attire">
    <h1>{copy.attireLabel}</h1>
    <h2>{copy.color} Scheme</h2>
    <p>We'll be decorating the venue with these {copy.color}s. Feel free to wear them!</p>
    <div className="swatches">
      <div className="swatch bg-gold">Hibiscus Yellow</div>
      <div className="swatch bg-orange">California Poppy Orange</div>
      <div className="swatch bg-green">Sunset Ranch Green</div>
      <div className="swatch bg-blue">New Zealand Blue</div>
      <div className="swatch bg-grey">Charcoal Grey</div>
    </div>

    <h2>Attire &amp; Dress Code</h2>
    <p>
      We're getting married on ranch on a tropical island overlooking the ocean, so don't expect to be wearing anything overly formal! The Bride will be in a light dress, and the Groom, a {copy.vest} and bowtie. Suits might be too hot, so wear them at your discretion. Hawaiian shirts generally frowned upon.
    </p>
    <p>
      The weather will be mostly sunny, temperatures in the {copy.ambientTemp}, with a chance of short and mild rain showers. A light layer will be useful as the temperature can drop by 5-10º in the evening as the tradewinds build.
    </p>
    <p>
      The ceremony and cocktail hour will be on grass, and the reception in a barn so simpler footwear is encouraged.
    </p>
  </Wrapper>
);

