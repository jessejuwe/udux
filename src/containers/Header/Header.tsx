import React from 'react';

import { images } from '../../constants';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="app__header">
      <img src={images.header} alt="header" />
    </div>
  );
};

export default Header;
