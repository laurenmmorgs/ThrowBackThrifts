const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  data: Buffer,
  url: String,
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  require: [true, "please upload a photo"]
});

module.exports = mongoose.model('Image', ImageSchema);