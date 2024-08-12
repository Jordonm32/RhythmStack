import React from 'react';
import { Link } from 'react-router-dom';  

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to RythmStack</h1>
      <div style={{ marginTop: '20px' }}>
        {/* Navigation Buttons */}
        <Link to="/tracks">
          <button style={{ marginRight: '10px' }}>View Tracks</button>
        </Link>
        <Link to="/playlists">
          <button>Create Playlist</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
