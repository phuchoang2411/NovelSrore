const dotenv = require('dotenv');

dotenv.config();

const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  PAGE_LIMIT: 6,
};

module.exports = config;
