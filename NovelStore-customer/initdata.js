require('dotenv').config();

const connectDB = require('./utils/database');
const Book = require('./models/Book');

const jsonBooks = require('./data/books.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Book.deleteMany();
    await Book.create(jsonBooks);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
