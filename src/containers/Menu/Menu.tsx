import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

type Props = {};

const Menu = (props: Props) => {
  return (
    <motion.div
      className="app__menu"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="app__menu-top">
        <div className="app__menu-top-home">
          <img src={images.home} alt="home" />
          <p className="p-text">Home</p>
        </div>

        <div className="app__menu-top-discover">
          <img src={images.discover} alt="discover" />
          <p className="p-text">Discover</p>
        </div>
      </div>

      <div className="app__menu-middle">
        <div className="app__menu-top-library">
          <img src={images.library} alt="library" />
          <p className="p-text">Your Library</p>
        </div>

        <div className="app__menu-top-liked-songs">
          <img src={images.likedSongs} alt="liked songs" />
          <p className="p-text">Liked Songs</p>
          <img src={images.sound} alt="sound" />
        </div>

        <div className="app__menu-top-recently-played">
          <img src={images.recent} alt="recently played" />
          <p className="p-text">Recently Played</p>
        </div>

        <div className="app__menu-top-create-playlist">
          <img src={images.createPlaylist} alt="create playlist" />
          <p className="p-text">Create Playlist</p>
        </div>

        <div className="app__menu-top-my-playlist">
          <img src={images.playlist} alt="liked songs" />
          <p className="p-text">My Playlists</p>
          <img src={images.search} alt="search" />
        </div>
      </div>

      <div className="app__menu-bottom">
        <p className="p-text">Riffs & Runs</p>
        <p className="p-text">African Heat</p>
        <p className="p-text">Gidi Nights</p>
        <p className="p-text">Running out of Playlist na....</p>
        <p className="p-text">Saturday was a Good Day</p>
        <p className="p-text">Gidi Nights</p>
        <p className="p-text">Riffs & Runs</p>
        <p className="p-text">African Heat</p>
        <p className="p-text">Gidi Nights</p>
        <p className="p-text">Running out of Playlist na....</p>
        <p className="p-text">Saturday was a Good Day</p>
        <p className="p-text">Gidi Nights</p>
        <p className="p-text">Running out of Playlist na....</p>
        <p className="p-text">Saturday was a Good Day</p>
        <p className="p-text">Gidi Nights</p>
      </div>
    </motion.div>
  );
};

export default Menu;
