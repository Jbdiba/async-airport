const Person = require('../src/person')

class CrewMember extends Person {
    constructor(name,position,idNumber){
        super(name)
        this.position = position
        this.idNumber = idNumber
    }
}

module.exports = CrewMember