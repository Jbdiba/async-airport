
const fs = require('fs')
class Airport {
    constructor(name, code){
        this.name = name;
        this.code = code;
    }

getInfo(callback) {
    const airportCode = this.name
    
    fs.readFile('./airportData.JSON', (err, data) => {
        const airports = JSON.parse(data)
        const Aport = airports.find(Aport => Aport.iata === airportCode)
        callback(err, Aport)
    })
    }

}
module.exports = Airport