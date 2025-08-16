const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Mongoose Model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  address: String,
  borrowingHistory: [{ bookId: String, date: Date }]
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`);
});