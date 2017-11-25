import React from 'react';

import { copy } from '../copy';

export const AttireColors = () => (
  <section>
    <h1>{copy.attireLabel}</h1>
    <h2>{copy.color} Scheme</h2>
    <div className="swatches">
      <div className="swatch bg-gold">Hibiscus Yellow</div>
      <div className="swatch bg-orange">California Poppy Orange</div>
      <div className="swatch bg-green">Sunset Ranch Green</div>
      <div className="swatch bg-blue">New Zealand Blue</div>
      <div className="swatch bg-grey">Charcoal Grey</div>
    </div>

    <h2>Attire &amp; Dress Code</h2>
    <p>
      We're getting married on ranch on a tropical island overlooking the ocean, so don't expect to be wearing anything too formal! The Bride will be in a light dress, and the Groom, jacketless with a bowtie.
    </p>
    <p>
      The weather will be mostly sunny, temperates in the {copy.ambientTemp}, with a chance of short and mild rain showers. A light layer will be useful as the temperature can drop by 5-10º in the evening as the tradewinds build.
    </p>
    <p>
      The ceremony and cocktail hour will be on grass, and the reception in a barn so simpler footwear is encouraged.
    </p>
  </section>
);

