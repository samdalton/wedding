import React from 'react';

import { copy } from '../copy';

export const AttireColors = () => (
  <section>
    <h1>{copy.attireLabel}</h1>
    <p>{copy.color} Scheme</p>
    <div className="swatches">
      <div className="swatch bg-gold">Hibiscus Yellow</div>
      <div className="swatch bg-orange">California Poppy Orange</div>
      <div className="swatch bg-green">Sunset Ranch Green</div>
      <div className="swatch bg-blue">New Zealand Blue</div>
      <div className="swatch bg-grey">Charcoal Grey</div>
    </div>
  </section>
);

