const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mongoose Model
const Borrowing = mongoose.model('Borrowing', new mongoose.Schema({
  userId: String,
  bookId: String,
  dateBorrowed: Date,
  dateReturned: Date
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.post('/borrow', async (req, res) => {
  const borrowing = new Borrowing(req.body);
  await borrowing.save();
  res.send(borrowing);
});

app.get('/borrowing', async (req, res) => {
  const borrowings = await Borrowing.find();
  res.send(borrowings);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Borrowing service running on port ${PORT}`);
});