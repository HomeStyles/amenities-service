const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2/airbnb')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

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