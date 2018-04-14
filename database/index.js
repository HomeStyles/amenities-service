const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airbnb');

const homeSchema = new mongoose.Schema({
  homeId: Number, 
  homeName: String,
  description: String,
  location: String,
  viewsThisWeek: Number,
  petsAllowed: Boolean,
  checkOut: String,
  checkIn: String,
  amenities: {
    wifi: Boolean,
    hotWater: Boolean,
    shampoo: Boolean,
    towels: Boolean,
    sheets: Boolean,
    kitchen: Boolean,
  },
  rooms: {
    totalBedrooms: Number,
    totalBeds: Number,
    totalBaths: Number,
  },
  host: {
    hostId: Number, 
    firstName: String,
    lastName: String, 
    image: String,
    email: String,
  },
});

const Home = mongoose.model('Home', homeSchema);

const find = () => {
  Home.find();
};

module.exports.Home = Home;