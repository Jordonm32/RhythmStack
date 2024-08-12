const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  genre: { type: String },
  duration: { type: Number, required: true },
  fileLocation: { type: String, required: true },
});

module.exports = mongoose.model('Track', TrackSchema);
