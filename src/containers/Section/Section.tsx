import React from 'react';
import { motion } from 'framer-motion';

import { MUSIC_GROUP_ONE, MUSIC_GROUP_TWO } from '../../helpers/helpers';

type Props = {};

const Section = (props: Props) => {
  return (
    <motion.div
      className="app__section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="text-group">
        <h3 className="bold-text">Welcome Back!</h3>
        <p>See More</p>
      </div>
      <div className="app__section-top-music-group">
        {MUSIC_GROUP_ONE.map(item => (
          <div key={`${item.title}key1-${Math.floor(Math.random() * 100)}`}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <h3 className="bold-text">Cheers to the Weekend</h3>
      <div className="app__section-bottom-music-group">
        {MUSIC_GROUP_TWO.map(item => (
          <div key={`${item.title}key2-${Math.floor(Math.random() * 100)}`}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section;
