import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TrackListingPage from './pages/TrackListingPage';
import PlaylistPage from './pages/PlaylistPage'; // Assuming you have a PlaylistPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks" element={<TrackListingPage />} />
        <Route path="/playlists" element={<PlaylistPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
