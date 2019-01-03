class Room {
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

  print () {
    var output = []
    output.push(this.name)
    if(!this.dark){
      if (!this.visited) output.push(this.description)
      if (this.foe) output.push(this.foe.encounter())

      //for (var i = 0; i < this.features.length; i++) {
        //output.push(printItem(this.features[i]))
      //}
    }else{
      output.push('The room is pitch black. You run the risk of being whisked away by the spirits that linger here.')
    }
    this.visited = true
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
