require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonBooks = require('./data/books.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(jsonBooks);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
