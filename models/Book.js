const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  },
  featuredImage: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  ratingAvg: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
  totalPurchase: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('book', bookSchema, 'books');
