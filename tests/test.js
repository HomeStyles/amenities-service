const {arr} = require('./sample-data.js');

test('the array has 100 items', () => {
  expect(arr.length).toBe(100);
});

test('total bedrooms are at least 1', () => {
	for (let i = 0; i < arr.length; i++) {
		expect(arr[i].rooms.totalBedrooms).toBeGreaterThanOrEqual(1);
	}
});

//correct type of data
//more than bedrooms - check to see if there is an object with this shape, these properties
//escaping
//successful fail and fetch for server
//prop types for things rendering in React