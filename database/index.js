const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb');

const homeSchema = new mongoose.Schema({
	_id: Number,
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
		totalBedrooms: Boolean,
		totalBeds: Boolean,
		totalBaths: Boolean,
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

let homes = new Home({ 
  _id: 0,
  homeName: 'Impedit et quod ut illum aut quam et.',
  description: 'Eum ullam odit totam et consequatur veritatis magnam commodi veniam. Quia labore numquam commodi consequuntur delectus. Saepe adipisci nihil id nobis aut dolor assumenda accusamus. Molestiae doloribus voluptatem et sed et.\n \rImpedit dolores maxime et ipsum earum nisi omnis et. Culpa non mollitia totam enim eveniet labore. Eum earum libero rerum velit et voluptate possimus. Asperiores dolores eveniet vel ullam dolorem.\n \rSit est quos quae quaerat itaque repellendus eos neque sit. Minima dolores itaque quo perferendis nostrum odio non velit. Aliquam natus molestias neque voluptatem.',
  location: 'Estellaville',
  viewsThisWeek: 57228,
  petsAllowed: true,
  checkOut: '10AM',
  checkIn: '2PM',
  amenities: { 
    wifi: true,
    hotWater: false,
    shampoo: false,
    towels: true,
    sheets: false,
    kitchen: true 
  },
  rooms: { 
    totalBedrooms: 2, 
    totalBeds: 2, 
    totalBaths: 1 
  },
  host: { 
    hostId: 73018,
    firstName: 'Rosa',
    lastName: 'Hickle',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg',
    email: 'Branson.Kautzer45@gmail.com' 
  }
});

// homes.save((err) => {
// 		if (err) throw err;
// });