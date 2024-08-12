import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('/api/playlists')
      .then(response => setPlaylists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Your Playlists</h1>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistPage;
