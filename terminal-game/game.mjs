import Room from './rooms'
import { Item, Light, Container, Door } from './features'
import TextParser from './parsing'
import { Character, Hero, Ghost, Bat } from './characters'

export class Game {
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
    var letter = new Item(
      'letter',
      'Idk what I want this to say yet!',
      ''
    )
    var flashlight = new Light(
      'flashlight',
      'A slightly rusted but usable flashlight.',
      ''
    )
    var mailbox = new Container('mailbox', '', '', [letter, flashlight])
    var frontYard = new Room('Front of house', frontYardText, false, [mailbox])

    var entryRoom = new Room(
      'Entry room',
      'You are standing in a small tiled entry room. A long staircase stretches into darkness to the north. To the west, there are unlocked doors to the west and to the east.',
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
    var key = new Item(
      'key',
      'The key is small but heavy.',
      'A tarnished silver key lies on the bed.'
    )
    var canopy = new Container(
      'canopy',
      'A white canopy with a small hoop at the top, scattered with silk lilacs sewn into the fabric.',
      'A delicate canopy decorated with small silk lilacs is closed around the bed',
      [bat, key]
    )

    var myRoom = new Room(
      "Girl's bedroom",
      "You are standing in what looks to be someone's bedroom. Two windows look out to the backyard. A delicate canopy decorated with small silk lilacs is closed around the bed.",
      false,
      [canopy]
    )

    var hallway = new Room(
      "Upstairs hallway",
      "This long hallway has several closed doors to the east, and one sliver of weak light issuing from a door to the west.",
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
      console.log(this.currentRoom.print())
    } else {
      console.log("You can't go that way.\n")
    }
  }

  processCommand (input) {
    var command = new String(this.parser.processText(input))
    var commandTokens = command.split(' ')
    switch (commandTokens[0]) {
      case 'inventory':
        console.log(this.adventurer.showInventory())
        break

      case 'attack':
        attackTurn(commandTokens[1])
        break

      case 'move':
        this.moveRooms(commandTokens[1])
        break

      case 'take':
        var feature
        var found = false
        for (var i = 0; i < this.currentRoom.features.length; i++) {
          feature = this.currentRoom.features[i]
          if (feature.name == commandTokens[1]){
            this.adventurer.take(feature)
            found = true
          }
        }
        if(!found){
          console.log('That\'s not here.')
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
        break

      case 'open':
        var feature = this.currentRoom.features[0]
        var objects = []
        try {
          objects = feature.open() 
        } catch {
          console.log("You can't open that.")
        }
        this.currentRoom.features = this.currentRoom.features.concat(objects)
        break

      default:
        console.log(command + ' \n')
    }
  }
}

export default Game
