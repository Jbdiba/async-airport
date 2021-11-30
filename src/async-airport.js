const fs = require('fs')
const path = require('path')
class Airport2 {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		this.planes.push(plane)
	}

    getInfo(callback) {
        //store airport code as a local constant
        const airportCode = this.name
        //store file path of json data file as a local constant
        const pathtoData = path.join(__dirname, 'airportsData.json')
        //read the json file
        fs.readFile(pathtoData, (err, data) =>{
            //return all airports as json object
            const airports = JSON.parse(data)
            //return 1 airport whose code matches this airport code
            const airport = airports.find(airport => airport.iata === airportCode)
            callback(err,airport)
        })
    }
}

module.exports = Airport2