var fs = require('fs')

class Game {
  constructor () {
    adventurer = new Hero()
    thief = new Thief()
    rooms = generateRooms()
    currentRoom = rooms[0]
    parser = new TextParser()
  }

  generateRooms () {
    // escaping out the window
    var frontYardText =
      'You are facing a stately blue house. Dry leaves litter the ground from the looming oak trees. The front door hangs loosley on its hinges, slightly ajar.'
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
      'The Entry',
      'You are standing in a small tiled entry room.',
      true,
      ''
    )

    frontYard.north = entryRoom
    entryRoom.south = frontYard
  }

  attackTurn (foe) {
    var attack = adventurer.generateAttack()
    var foeAttack = foe.generateAttack()
    adventurer.takeDamage(foeAttack)
    foe.takeDamage(attack)
  }

  moveRooms (direction) {
    if (
      currentRoom.getNeighbor(direction) &&
      !currentRoom.exits[direction].locked
    ) {
      currentRoom = currentRoom.getNeighbor(direction)
      console.log(currentRoom.print())
    } else {
      console.log("You can't go that way.")
    }
  }

  processCommand (input) {
    var command = parser.processText(input)
    var commandTokens = command.split(' ')
    switch (commandTokens[0]) {
      case 'attack':
        attackTurn(currentRoom.foe)
        break

      case 'move':
        moveRooms(commandTokens[1])
        break

      case 'take':
        // TODO: function for picking up items
        break

      case 'examine':
        for (feature in currentRoom.features) {
          if (feature.name == commandTokens[1]) feature.examine()
        }
        break

      default:
        console.log(command)
    }
  }
}
