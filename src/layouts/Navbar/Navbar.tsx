import React from 'react';
import { LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';

import { images } from '../../constants';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="app__navbar">
      <div className="app__profile">
        <img src={images.profile} alt="profile" />
        <p className="p-text">Hey! Aleem</p>
      </div>
      <div className="app__navigation app__flex">
        <div className="app__navigation-navs app__flex">
          <div className="app__navigation-navs-left app__flex">
            <LeftOutlined />
          </div>
          <div className="app__navigation-navs-right app__flex">
            <RightOutlined />
          </div>
        </div>
        <div className="app__navigation-search app__flex">
          <SearchOutlined />
          <input type="text" name="search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
