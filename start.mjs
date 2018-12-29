import Game from './game'
import readlineSync from 'readline-sync'

var adventure = new Game()
var save = new Game()
var input = ''
var cont = true

console.log('\n============ Welcome to TextAdventure ============\n')

while (cont) {
  console.log('\n' + adventure.currentRoom.print())
  adventure.currentRoom.visited = true
  console.log()
  var input = readlineSync.question('>')
  if (input == 'Quit' || input == 'q' || input == 'Q') {
    console.log('Thanks for playing!')
    break
  } else {
    adventure.processCommand(input)
  }
}
