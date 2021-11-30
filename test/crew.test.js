
const CrewMember = require('../src/crew')

describe('CrewMember', () => {
    const testCrew = new CrewMember("Michael", "pilot",1)

    test('has a name', ()=>{
        expect(testCrew.name).toBe("Michael")
    })

    test('has a position', ()=> {
        expect(testCrew.position).toBe("pilot")
    })

    test('id Number is number',()=>{
        expect(typeof testCrew.idNumber).toBe("number")
    })

})