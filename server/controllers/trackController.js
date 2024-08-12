const Track = require('../models/Track');

// Retrieve a list of available tracks
exports.getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Retrieve detailed information about a specific track
exports.getTrackById = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ msg: 'Track not found' });
    res.json(track);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Add a new track (admin only)
exports.createTrack = async (req, res) => {
  const { title, artist, album, genre, duration, fileLocation } = req.body;
  try {
    const newTrack = new Track({
      title,
      artist,
      album,
      genre,
      duration,
      fileLocation,
    });
    const track = await newTrack.save();
    res.json(track);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update track information (admin only)
exports.updateTrack = async (req, res) => {
  const { title, artist, album, genre, duration, fileLocation } = req.body;
  try {
    let track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ msg: 'Track not found' });

    track = await Track.findByIdAndUpdate(req.params.id, {
      title,
      artist,
      album,
      genre,
      duration,
      fileLocation,
    }, { new: true });

    res.json(track);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a track (admin only)
exports.deleteTrack = async (req, res) => {
  try {
    let track = await Track.findById(req.params.id);
    if (!track) return res.status(404).json({ msg: 'Track not found' });

    await Track.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Track removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
