const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mongoose Model
const Book = mongoose.model('Book', new mongoose.Schema({
  title: String,
  author: String,
  genre: String
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send(book);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Books service running on port ${PORT}`);
});