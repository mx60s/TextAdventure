class Game {
  constructor () {
    this.adventurer = new Hero()
    this.ghost = new Ghost()
    this.rooms = this.generateRooms()
    this.currentRoom = this.rooms[0]
    this.parser = new TextParser()
  }

  generateRooms () {
    // escaping out the window
    var frontYardText =
      'You are facing a stately blue house to the north. Dry leaves litter the ground from the looming oak trees. The front door hangs loosley on its hinges, slightly ajar.'
    var mailbox = new Item('mailbox', '', 'open', '')
    var letter = new Item(
      'crisp letter',
      'Idk what I want this to say yet!',
      ['take', 'keep', 'grab'],
      ''
    )
    var frontYard = new Room('Front of house', frontYardText, false, [
      mailbox,
      letter
    ])

    var entryRoom = new Room(
      'Entry room',
      'You are standing in a small tiled entry room. A long staircase stretches into darkness to the north, and to the west, a door is slightly cracked open.',
      true,
      ''
    )

    var kitchen = new Room(
      'Kitchen',
      'You are standing in the doorway of an airy kitchen, with light pouring in from the windows to the backyard. A fine layer of dust coats the table.',
      false,
      []
    )

    var attic = new Room(
      'Attic',
      'You face a long dark expanse, and the light of your flashlight only extends a few feet in front of you. There are several boxes of scattered holiday decorations, but you get the sense that no one has been here in a long time.',
      true,
      []
    )

    // white canopy with small lilacs sewn into it. There is someone behind it, lying on the bed.
    var bat = new Bat(5)
    var key = new Item('key', 'The key is small but heavy.', 'A tarnished silver key lies on the bed.')
    var canopy = new Container('canopy','A white canopy with a small hoop at the top, scattered with silk lilacs sewn into the fabric.','A delicate canopy decorated with small silk lilacs is closed around the bed', [bat, key])

    var myRoom = new Room(
      'Girl\'s bedroom',
      'You are standing in what looks to be someone\'s bedroom. Two windows look out to the backyard. A delicate canopy decorated with small silk lilacs is closed around the bed.',
      false,
      [canopy]
    )

    frontYard.north = entryRoom
    entryRoom.south = frontYard
    entryRoom.west = kitchen
    kitchen.east = entryRoom

    var rooms = [frontYard, entryRoom, kitchen]
    return rooms
  }

  attackTurn (enemyName) {
    if (this.currentRoom.foe.name == enemyName) {
      var attack = adventurer.generateAttack()
      var foeAttack = foe.generateAttack()
      adventurer.takeDamage(foeAttack)
      foe.takeDamage(attack)
      return 'attack happened'
    } else return "You don't see " + enemyName + ' in this room.'
  }

  moveRooms (direction) {
    var output = []
    if (
      this.currentRoom.getNeighbor(direction) &&
      !this.currentRoom.exits[direction].locked
    ) {
      this.currentRoom = this.currentRoom.getNeighbor(direction)
      output = this.currentRoom.print()
    } else {
      output.push("You can't go that way.")
    }
    return output
  }

  processCommand (input) {
    var command = new String(this.parser.processText(input))
    var commandTokens = command.split(' ')
    var output = []
    switch (commandTokens[0]) {
      case 'attack':
        output.push(attackTurn(commandTokens[1]))
        break

      case 'move':
        output = this.moveRooms(commandTokens[1])
        break

      case 'take':
        var feature
        for (feature in this.currentRoom.features) {
          if (feature.name == commandTokens[1]) this.adventurer.take(feature)
        }
        break

      case 'examine':
        var feature
        for (feature in this.currentRoom.features) {
          if (feature.name == commandTokens[1]) output.push(feature.examine())
        }
        break

      case 'look':
        this.currentRoom.visited = false
        output = output.concat(this.currentRoom.print())
        break

      default:
        output.push(command)
    }
    return output
  }
}
