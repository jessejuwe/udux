import React from 'react';

import { Navbar, Menu, Header, Section } from '../../exports/exports';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="app__homepage">
      <Navbar />
      <div className="app__menu">
        <Menu />
        <div className="app__main-section">
          <Header />
          <Section />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
