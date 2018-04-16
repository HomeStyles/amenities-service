const faker = require('faker');
const {Home} = require('./index.js');

let arr = [];

for (let i = 2; i < 102; i++) {
  arr.push({
    _id: i,
    homeName: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    location: faker.address.city(),
    viewsThisWeek: faker.random.number(),
    petsAllowed: faker.random.boolean(),
    checkOut: (Math.floor(Math.random() * (12 - 10)) + 10) + 'AM',
    checkIn: (Math.floor(Math.random() * (3 - 1)) + 1) + 'PM',
    amenities: {
      wifi: faker.random.boolean(),
      hotWater: faker.random.boolean(),
      shampoo: faker.random.boolean(),
      towels: faker.random.boolean(),
      sheets: faker.random.boolean(),
      kitchen: faker.random.boolean(),
    },
    rooms: {
      totalBedrooms: (Math.floor(Math.random() * (5 - 1)) + 1),
      totalBeds: (Math.floor(Math.random() * (5 - 1)) + 1),
      totalBaths: (Math.floor(Math.random() * (3 - 1)) + 1),
    },
    host: {
      hostId: faker.random.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
    },
  });
}

Home.insertMany(arr, (err, docs) => {
  if (err) {
    return console.error(err);
  }
});