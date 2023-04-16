const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter an item name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter an item price"],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  orderId: {
    type: Number,
    default: function () {
      return Number(this.dateCreated.getTime());
    },
  },
  tag: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
