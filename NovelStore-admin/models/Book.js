const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: '',
  },
  publishers: {
    type: String,
    default: '',
  },
  translators: {
    type: String,
    default: '',
  },
  pages: {
    type: Number,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  releaseDate: {
    type: String,
    default: '',
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BookCategory',
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
