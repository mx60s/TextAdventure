class Room {
  constructor (name, description, features, dark, foe) {
    this.name = name
    this.description = description // description will include exits
    this.features = features
    this.dark = dark // bool
    this.visited = false
    this.foe = foe // default?
    this.exits = []
    this.north = null
    this.east = null
    this.south = null
    this.west = null
  }

  print () {
    var output = name + '\n'
    if (!visited) output += description
    if (foe) output += foe.encounter()

    for (item in features) {
      output += item.print()
    }
    return output
  }

  getNeighbor (direction) {
    if (direction == 'north') return this.north
    else if (direction == 'east') return this.east
    else if (direction == 'south') return this.south
    else if (direction == 'west') return this.west
    else return null
  }
}
