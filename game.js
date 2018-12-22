var fs = require('fs')

class Game {
  constructor () {
    var adventurer = new Hero()
    var thief = new Thief()
    var rooms = generateRooms()
    var currentRoom = rooms[0]
    var attackWords = ['stab', 'attack', 'swing', 'hit', 'strike']
    var enemyWords = ['grue', 'thief', 'troll']
  }

  attackTurn (foe) {
    var attack = adventurer.generateAttack()
    var foeAttack = foe.generateAttack()
    adventurer.takeDamage(foeAttack)
    foe.takeDamage(attack)
  }

  generateRooms () {}

  moveRooms (direction) {
    if (
      currentRoom.getNeighbor(direction) &&
      !currentRoom.exits[direction].locked
    ) {
      currentRoom = currentRoom.getNeighbor(direction)
    } else {
      console.log("You can't go that way.")
    }
  }

  processCommand (input) {
    input = input.replace(/\s{2,}/g, '')
    var tokens = input.split(' ')

    if (attackWords.includes(tokens[0])) {
      if (tokens.length > 1 && enemyWords.includes(foe)) {
        var enemyName = tokens[1]
        if (currentRoom.foe.name == enemyName) {
          attackTurn(currentRoom.foe)
        } else console.log("You don't see " + enemyName + ' in this room.')
      } else {
        console.log('Attack what?')
      }
    }
  }
}
