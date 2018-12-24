class Room {
  constructor (name, description, dark, features, foe) {
    this.name = name
    this.description = description // description will include exits
    this.features = features
    this.dark = dark // bool
    this.foe = foe // default?
    visited = false
    exits = {
      north: new Door(),
      east: new Door(),
      south: new Door(),
      west: new Door()
    }
    north = null
    east = null
    south = null
    west = null
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
