var fs = require('fs')

var adventure = new Game()
var save = new Game()
var input = ''

console.log('============ Welcome to TextAdventure ============')

while (true) {
  console.log(adventure.rooms[0].print())

  input = prompt('>')
  adventure.processCommand(input)
}
