import React from 'react';

import end from '../images/end.jpg';

export const Photos = () => (
  <section>
    <h1>Angela and Sam's Wedding</h1>
    <p>We did it! Thank you to everyone who came and made our special day as perfect as we both imagined it. Below you'll find links to the professional photos, the coasters/tiles, and a link to upload any photos you took yourselves, and see photos other people took. We also had the wedding professionally filmed and will have a link for that here once it is available, hopefully by the end of the year.</p>

    <p>
      <a href="https://photos.app.goo.gl/NBzwpdMwXiZpgxGf9">Professional Photos</a>
    </p>
    <p>
      <a href="https://photos.app.goo.gl/PAHVJqaWYQKilM9J2">Tiles/Coasters</a>
    </p>
    <p>
      <a href="https://photos.app.goo.gl/gLa8svUeGK8ccQ4v8">Upload your own / see others</a>
    </p>

    <img
      className="postcard-image"
      src={end}
      alt="sunset"
      width={640}
    />

  </section>
);
