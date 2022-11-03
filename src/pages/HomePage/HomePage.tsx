import React from 'react';

import { Navbar, Menu, Header, Section, Footer } from '../../exports/exports';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="menu">
        <Menu />
        <div className="main-section">
          <Header />
          <Section />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
