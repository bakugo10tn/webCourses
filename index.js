const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (users database)
{/* sync function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://yassinamri156:Yassinamri123456@helmokhekcluster.qiq4s.mongodb.net/users?retryWrites=true&w=majority&appName=HelMokhekCluster",
      "mongodb+srv://yassinamri156:Yassinamri123456@helmokhekcluster.qiq4s.mongodb.net/orders?retryWrites=true&w=majority&appName=HelMokhekCluster"

    );
    console.log("Connected to users database");
  } catch (err) {
    console.log("Failed to connect to users database", err);
  }
}

connectDB();

// Define User schema and model (for signup)
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema, 'user');

// Sign-up route to save user to MongoDB
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
  });

  newUser.save()
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to register user' });
    });
});

// Connect to the feedback database for messages
const feedbackDB = mongoose.createConnection(
  "mongodb+srv://yassinamri156:Yassinamri123456@helmokhekcluster.qiq4s.mongodb.net/feedback?retryWrites=true&w=majority&appName=HelMokhekCluster"
);

// Define Message Schema
const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = feedbackDB.model('Message', messageSchema, 'msg');

// POST route to save messages to MongoDB
app.post('/api/messages', (req, res) => {
  const { email, content } = req.body;

  const newMessage = new Message({
    email,
    content,
  });

  newMessage.save()
    .then(message => {
      res.status(201).json(message);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to save message' });
    });
});

async function connectDB() {
  try {
    await mongoose.connect(
    );
    console.log("Connected to orders database");
  } catch (err) {
    console.log("Failed to connect to orders database", err);
  }
}

connectDB();

// Define Order schema and model
const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  deliveryOption: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema, 'order');

// POST route to save orders to MongoDB
app.post('/api/orders', (req, res) => {
  const { fullName, email, phoneNumber, streetAddress, city, zipCode, deliveryOption, cardNumber, expiryDate, cvv } = req.body;

  const newOrder = new Order({
    fullName,
    email,
    phoneNumber,
    streetAddress,
    city,
    zipCode,
    deliveryOption,
    cardNumber,
    expiryDate,
    cvv,
  });

  newOrder.save()
    .then(order => {
      res.status(201).json(order);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to save order' });
    });
});*/}


// Connect to the wishlists database
async function connectWishlistDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://yassinamri156:Yassinamri123456@helmokhekcluster.qiq4s.mongodb.net/wishlists?retryWrites=true&w=majority&appName=HelMokhekCluster"
    );
    console.log("Connected to wishlists database");
  } catch (err) {
    console.log("Failed to connect to wishlists database", err);
  }
}

connectWishlistDB();
// Define Wishlist schema and model
const wishlistSchema = new mongoose.Schema({
  img: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

// POST route to save wishlist item to MongoDB
app.post('/api/wishlist', async (req, res) => {

  const { img, desc, price } = req.body;

  const newWishlistItem = new Wishlist({ img, desc, price });
  console.log(newWishlistItem)
  
  try {
    const item = await newWishlistItem.save();
    res.status(201).json(item);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to save wishlist item' });
  }
});



// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
