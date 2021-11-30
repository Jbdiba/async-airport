const Airplane = require("../src/airplane");

describe('Airplane class', () => {
    const testAirplane = new Airplane("Boeing", 365433099)

    test('airplane has model type', () => { 
        expect(testAirplane.model).toBe("Boeing")
    });

    test('number of passengers on board', () => {
        expect(testAirplane.number).toBe(365433099)
        
    });    
});

