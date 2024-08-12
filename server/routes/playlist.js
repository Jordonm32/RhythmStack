const express = require('express');
const router = express.Router();
const {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist
} = require('../controllers/playlistController');
const auth = require('../middleware/auth');

router.post('/', auth, createPlaylist);
router.get('/', auth, getPlaylists);
router.get('/:id', auth, getPlaylistById);
router.put('/:id', auth, updatePlaylist);
router.delete('/:id', auth, deletePlaylist);

module.exports = router;
