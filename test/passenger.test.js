const Passenger = require('../src/passenger')

describe('Passenger', () => {
    const testPassenger = new Passenger("Michael", "MA021", "a2")

    test('has a passport number', ()=>{
        expect(testPassenger.passportNumber).toBe("MA021")
    })

    test('has a seat number', ()=> {
        expect(testPassenger.seatNumber).toBe("a2")
    })

})