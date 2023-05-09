const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
      itemName: { 
        type: String,
        required: [true, 'Item name is required'],
        minLength: [3, "Item name must be at least 3 characters"]
     },
     price: {
      type: Number, 
      required: [true, "Please enter a price to sell"],
      min: [1, "Please make sure your price is over a dollar"]
     },
      itemSize: {
        type: String,
        required: [true, 'Please enter a size '],
        minLength: [1, "Please make sure the size is valid "]
    },
      category: {
        type: String,
        required: [true, "Please select a category"]
    },
    description : {
      type: String, 
      required: [true, "Please enter a description"],
      minLength: [5, "Description should be at least 5 characters"]
    },
    itemImage: {
      type: String, 
      required:true 
    }
}, { timestamps: true });
module.exports = mongoose.model('Item', itemSchema);


