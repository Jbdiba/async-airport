const Airport2 = require('../src/async-airport')
const Airport1 = require('../src/airport')
const Plane = require('../src/Plane')
const Bag = require('../src/Bag')
const Person = require('../src/Person')


describe('Airport object', () => {
	const testAirport = new Airport1("DFW")
	const testPlane = new Plane('912')
	const testPerson = new Person('Damon')
	const testBag = new Bag(55)
	const testAirport2 = new Airport2("CDG")

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airport has planes', () => {
		expect(Array.isArray(testAirport.planes)).toBe(true)
	})

	test('airport can add planes', () => {
		testAirport.addPlane(testPlane)
		expect(testAirport.planes.length).toBe(1)
	})

	test('airport can have planes with passengers with bags', () => {
		testPerson.addBag(testBag)
		testPlane.addPassenger(testPerson)
		testAirport.addPlane(testPlane)
		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(55)
	})

	test('airports have a country', (done) => {
		//run getInfo method
		testAirport2.getInfo((err, info) => {
		//log this airport info to console
		console.log(info)
		//expect error to be null
		expect(err).toBeNull()
		//expect the airport country to be FR
		expect(info.country).toEqual('FR')
		//end asynchrounous test
		done()
	})
})

})