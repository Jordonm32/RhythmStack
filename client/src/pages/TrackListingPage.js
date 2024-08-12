import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackListingPage = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('/api/tracks')
      .then(response => setTracks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Track Listing</h1>
      <ul>
        {tracks.map(track => (
          <li key={track._id}>{track.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackListingPage;
