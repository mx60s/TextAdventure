import { Item, Container, Door, printItem } from './features'

export class Room {
  constructor (name, description, dark, features, foe) {
    this.name = name
    this.description = description // description will include exits
    this.features = features
    this.dark = dark // bool
    this.foe = foe // default?
    this.visited = false
    this.exits = {
      north: new Door(false),
      east: new Door(false),
      south: new Door(false),
      west: new Door(false)
    }
    this.north = null
    this.east = null
    this.south = null
    this.west = null
  }

  print (character) {
    var output = this.name + '\n'
    if (!this.dark || character.light) {
      if (!this.visited) output += this.description + ' '
      if (this.foe) output += this.foe.encounter()

      for (var i = 0; i < this.features.length; i++) {
        output += printItem(this.features[i])
      }
    } else {
      output +=
        'The room is pitch black. You run the risk of being whisked away by the spirits that linger here.'
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

export default Room
