import Room from './rooms'
import { Item, Container, Door } from './features'
import TextParser from './parsing'
import { Character, Hero, Thief } from './characters'

export class Game {
  constructor () {
    this.adventurer = new Hero()
    this.thief = new Thief()
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
      'You are standing in a small tiled entry room.',
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
      console.log('attack happened')
    } else console.log("You don't see " + enemyName + ' in this room.')
  }

  moveRooms (direction) {
    if (
      this.currentRoom.getNeighbor(direction) &&
      !this.currentRoom.exits[direction].locked
    ) {
      this.currentRoom = this.currentRoom.getNeighbor(direction)
    } else {
      console.log("You can't go that way.\n")
    }
  }

  processCommand (input) {
    var command = new String(this.parser.processText(input))
    var commandTokens = command.split(' ')
    switch (commandTokens[0]) {
      case 'attack':
        attackTurn(commandTokens[1])
        break

      case 'move':
        this.moveRooms(commandTokens[1])
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
          if (feature.name == commandTokens[1]) feature.examine()
        }
        break

      case 'look':
        this.currentRoom.visited = false
        console.log(this.currentRoom.print())

      default:
        console.log(command + ' \n')
    }
  }
}

export default Game
