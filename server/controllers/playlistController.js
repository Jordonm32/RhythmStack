const Playlist = require('../models/Playlist');

// Create a new playlist
exports.createPlaylist = async (req, res) => {
  const { name, tracks } = req.body;
  try {
    const newPlaylist = new Playlist({
      name,
      user: req.user.userId,
      tracks,
    });
    const playlist = await newPlaylist.save();
    res.json(playlist);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Retrieve a list of user's playlists
exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.userId }).populate('tracks');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Retrieve detailed information about a specific playlist
exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('tracks');
    if (!playlist) return res.status(404).json({ msg: 'Playlist not found' });
    res.json(playlist);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update a playlist (e.g., add/remove tracks)
exports.updatePlaylist = async (req, res) => {
  const { name, tracks } = req.body;
  try {
    let playlist = await Playlist.findById(req.params.id);
    if (!playlist) return res.status(404).json({ msg: 'Playlist not found' });

    playlist = await Playlist.findByIdAndUpdate(req.params.id, {
      name,
      tracks,
    }, { new: true });

    res.json(playlist);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete a playlist
exports.deletePlaylist = async (req, res) => {
  try {
    let playlist = await Playlist.findById(req.params.id);
    if (!playlist) return res.status(404).json({ msg: 'Playlist not found' });

    await Playlist.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Playlist removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
