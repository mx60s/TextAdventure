import Game from './game'
import readlineSync from 'readline-sync'

var adventure = new Game()
var save = new Game()
var input = ''
var cont = true

console.log('\n============ Welcome to TextAdventure ============\n')
console.log(adventure.currentRoom.print())
adventure.currentRoom.visited = true

while (cont) {
  console.log()
  var input = readlineSync.question('>')
  if (input == 'Quit' || input == 'quit' || input == 'q' || input == 'Q') {
    console.log('Thanks for playing!\n')
    cont = false
  } else if (input == 'save') {
    save = adventure
    console.log('Saved.')
  } else if (input == 'load') {
    console.log('Loading...')
    adventure = save
    console.log(adventure.currentRoom.print())
  } else {
    adventure.processCommand(input)
  }
}
