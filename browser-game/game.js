class Game {
  constructor () {
    this.adventurer = new Hero(10)
    // this.ghost = new Ghost()
    this.rooms = this.generateRooms()
    this.currentRoom = this.rooms[0]
    this.parser = new TextParser()
  }

  generateRooms () {
    // escaping out the window
    var frontYardText =
      'You are facing a stately blue house to the north. Dry leaves litter the ground from the looming oak trees. The front door hangs loosley on its hinges, slightly ajar.'
    var letter = new Item(
      'letter',
      '"Welcome to this little text adventure, made by Maggie von Ebers. Type \'help\' at any time to get a list of commands."',
      '',
      ''
    )
    var flashlight = new Item(
      'flashlight',
      'A slightly rusted but usable flashlight.',
      '',
      'The flashlight turns on as you pick it up.'
    )
    var mailbox = new Container('mailbox', '', '', '', [letter, flashlight])
    var frontYard = new Room(
      'Front of house',
      frontYardText,
      false,
      [mailbox],
      ''
    )

    var spirit = new Spirit()

    var entryRoom = new Room(
      'Entry room',
      'You are standing in a small tiled entry room. A long staircase stretches into darkness to the north, and to the west, a door is slightly cracked open.',
      true,
      '',
      ''
    )

    var kitchen = new Room(
      'Kitchen',
      'You are standing in the doorway of an airy kitchen, with light pouring in from the windows to the backyard. A fine layer of dust coats the table.',
      false,
      [],
      ''
    )

    var attic = new Room(
      'Attic',
      'You face a long dark expanse, and the light of your flashlight only extends a few feet in front of you. There are several boxes of scattered holiday decorations, but you get the sense that no one has been here in a long time.',
      true,
      [],
      spirit
    )

    // white canopy with small lilacs sewn into it. There is someone behind it, lying on the bed.
    // var bat = new Bat(5)
    var key = new Item(
      'key',
      'The key is small but heavy.',
      'A tarnished silver key lies on the bed.',
      ''
    )
    var canopy = new Container(
      'canopy',
      'A white canopy with a small hoop at the top, scattered with silk lilacs sewn into the fabric.',
      'A delicate canopy decorated with small silk lilacs is closed around the bed',
      '',
      [key]
    )

    var myRoom = new Room(
      "Girl's bedroom",
      "You are standing in what looks to be someone's bedroom. Two windows look out to the backyard. A delicate canopy decorated with small silk lilacs is closed around the bed.",
      false,
      [canopy],
      ''
    )

    var hallway = new Room(
      'Upstairs hallway',
      'This long hallway has several closed doors to the east, and one sliver of weak light issuing from a door to the west.',
      true,
      [],
      ''
    )

    frontYard.north = entryRoom

    entryRoom.south = frontYard
    entryRoom.west = kitchen
    entryRoom.north = hallway

    hallway.south = entryRoom
    hallway.up = attic
    hallway.west = myRoom

    myRoom.east = hallway

    attic.down = hallway

    kitchen.east = entryRoom

    var rooms = [frontYard, entryRoom, kitchen, hallway, myRoom, attic]
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
      output = this.currentRoom.print(this.adventurer)
    } else {
      output.push("You can't go that way.")
    }

    if (!this.currentRoom.dark || this.adventurer.light) {
      this.currentRoom.visited = true
    }

    return output
  }

  processCommand (input) {
    this.currentRoom.numActions++
    var command = new String(this.parser.processText(input))
    var commandTokens = command.split(' ')
    var output = []
    switch (commandTokens[0]) {
      case 'inventory':
        output = output.concat(this.adventurer.showInventory())
        break

      case 'attack':
        output.push(attackTurn(commandTokens[1]))
        break

      case 'move':
        output = this.moveRooms(commandTokens[1])
        break

      case 'take':
        // dont forget to remove the thing from the room!!!
        var feature
        var found = false
        for (var i = 0; i < this.currentRoom.features.length; i++) {
          feature = this.currentRoom.features[i]
          if (feature.name == commandTokens[1]) {
            output.push(this.adventurer.take(feature))
            this.currentRoom.features = this.currentRoom.features.filter(
              function (value) {
                return value.name != feature.name
              }
            )
            found = true
          }
        }
        if (!found) {
          output.push("That's not here.")
        }
        break

      case 'examine':
        var feature
        var found = false
        for (var i = 0; i < this.currentRoom.features.length; i++) {
          feature = this.currentRoom.features[i]
          if (feature.name == commandTokens[1]) {
            output.push(examine(feature))
            found = true
          }
        }
        for (var i = 0; i < this.adventurer.inventory.contents.length; i++) {
          // output.push(this.adventurer.inventory.contents[i].name)
          if (this.adventurer.inventory.contents[i].name == commandTokens[1]) {
            output.push(examine(this.adventurer.inventory.contents[i]))
            found = true
          }
        }
        if (!found) {
          output.push("That's not here.")
        }
        break

      case 'look':
        this.currentRoom.visited = false
        output = output.concat(this.currentRoom.print(this.adventurer))
        break

      case 'open':
        if (commandTokens[1] == 'canopy') {
          this.currentRoom.foe = new Bat()
          // this.currentRoom.foe.reveal()
        }
        var feature = this.currentRoom.features[0]
        var objects
        var newOutput
        try {
          var opens = feature.open()
          newOutput = opens[0]
          objects = opens[1]
          output = output.concat(newOutput)
          this.currentRoom.features = this.currentRoom.features.concat(objects)
        } catch {
          output.push("You can't open that.")
        }
        break

      default:
        output.push(command)
    }
    return output
  }
}
