const Airport = require("../src/async-airport2")

describe("Airport Class",() => {
    const testAirport = new Airport("Dallas","DFW")
    const CDG = new Airport('CDG')
    
    test('Airport has a name', () => {
        expect(testAirport.name).toBe("Dallas")
    })

    test('airports have a city', () => {
        CDG.getInfo((err, info) => {
            console.log(info)
            expect(err).toBeNull()
            expect(info.country).toEqual('FR')
            expect(info.state).toEqual('Ile-de-France')
        })

    })
})