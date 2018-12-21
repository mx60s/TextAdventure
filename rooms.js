class Room {
  constructor (name, description, features, exits, dark, foe) {
    this.name = name
    this.description = description // description will include exits
    this.features = features
    this.exits = exits // map | keys: directions, values: doors (locked or unlocked)
    this.dark = dark // bool
    this.visited = false
    this.foe = foe // default?
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
}

// maybe text should go in a separate file
var damText =
  'You are standing on the top of the Flood Control Dam #3, which was quite a tourist attraction in times far distant. There are paths to the north, south, and west, and a scramble down. The sluice gates on the dam are closed. Behind the dam, there can be seen a wide reservoir. Water is pouring over the top of the now abandoned dam. There is a control panel here, on which a large metal bolt is mounted. Directly above the bolt is a small green plastic bubble.'
// var Dam = new Room('Dam', dam_text, )
