const {arr} = require('./sample-data.js');

test('the array has 100 items', () => {
  expect(arr.length).toBe(100);
});

test('total bedrooms are at least 1', () => {
	for (let i = 0; i < arr.length; i++) {
		expect(arr[i].rooms.totalBedrooms).toBeGreaterThanOrEqual(1);
	}
});

test('each home has the following properties', () => {
	for (let i = 0; i < arr.length; i++) {
		expect(arr[i]).toHaveProperty('homeName');
		expect(arr[i]).toHaveProperty('checkOut');
		expect(arr[i]).toHaveProperty('amenities.hotWater');
		expect(arr[i]).toHaveProperty('host.image');
	}
});

test('data set is filled with unique objects', () => {
	for (let i = 0; i < arr.length; i++) {
		expect(arr[3]).not.toMatchObject(arr[7]);
		expect(arr[43]).not.toMatchObject(arr[78]);
	}
});