const mongoose = require('mongoose');

const bookCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'BookCategory',
  bookCategorySchema,
  'bookCategories'
);
