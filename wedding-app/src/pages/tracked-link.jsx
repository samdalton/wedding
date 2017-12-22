import React from 'react';

export default ({
  className,
  children,
  href,
}) => {
  const clickHandler = () => {
    amplitude.getInstance().logEvent('external link', { href }); // eslint-disable-line
    setTimeout(() => {
      window.open(href);
    }, 350);
  };

  return (
    <a
      onClick={clickHandler}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
