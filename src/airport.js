class Airport1 {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		this.planes.push(plane)
	}
}

module.exports = Airport1