import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { images } from '../../constants';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="app__navbar app__flex">
      <div className="app__profile">
        <img src={images.profile} alt="profile" />
        <p className="p-text">Hey! Aleem</p>
      </div>
      <div className="app__navigation">
        <div className="app__navigation-navs">
          <div className="app__navigation-navs-left">
            <LeftOutlined />
          </div>
          <div className="app__navigation-navs-right">
            <RightOutlined />
          </div>
        </div>
        <div className="app__navigation-search"></div>
      </div>
    </div>
  );
};

export default Navbar;
