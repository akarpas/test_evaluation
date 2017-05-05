const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  description: String,
  type: String,
  keywords: String,
  images: [String],
  approxAge: Number,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  coordinates: [Number, Number]
});



const Item = mongoose.model("Item", itemSchema);
module.exports = Item;