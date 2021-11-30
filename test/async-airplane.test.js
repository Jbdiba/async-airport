const Airplane = require('../src/async-airplane')

describe('Airplane Class', () => {
    const testAirplane = new Airplane("Airbus 380", "AM1277")
    
    test("Airplane Has A Name", () => {
        expect(testAirplane.name).toBe('Airbus 380')
    })
    
    test("Airplane Has A Flightnumber", () => {
        expect(testAirplane.flightNumber).toBe('AM1277')
    })
   
})