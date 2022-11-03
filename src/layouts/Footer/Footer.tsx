import React from 'react';

import { images } from '../../constants';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="app__footer">
      <img src={images.home} alt="home" />
      <img src={images.discover} alt="discover" />
      <img src={images.library} alt="library" />
      <img src={images.playlist} alt="playlist" />
    </div>
  );
};

export default Footer;
