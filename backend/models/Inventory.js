const mongoose = require('mongoose');

// Check if the model exists before creating it
const Inventory = mongoose.models.Inventory || mongoose.model('Inventory', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  prescription: {
    type: String,
    enum: ['required', 'not_required'],
    default: 'not_required'
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
}));

module.exports = Inventory;
