import Game from './game'
import readlineSync from 'readline-sync'

var adventure = new Game()
var save = new Game()
var input = ''
var cont = true

console.log('\n============ Welcome to TextAdventure ============\n')
console.log(adventure.currentRoom.print())

while (cont) {
  adventure.currentRoom.visited = true
  console.log()
  var input = readlineSync.question('>')
  console.log()
  if (input == 'Quit' || input == 'q' || input == 'Q') {
    console.log('Thanks for playing!')
    break
  } else if(input == 'save'){
    save = adventure
    console.log('Saved.')
  } else if(input == 'load'){
    adventure = save
    console.log(adventure.currentRoom.print())
  }
  else {
    adventure.processCommand(input)
  }
}
