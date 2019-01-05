import Game from './game'
import readlineSync from 'readline-sync'

// Save isn't working, surprise
var adventure = new Game()
var save = new Game()
var input = ''
var cont = true

console.log('\n============ Welcome to TextAdventure ============\n')
console.log(adventure.currentRoom.print())
adventure.currentRoom.visited = true

while (cont) {
  console.log()
  if (adventure.currentRoom.foe) {
    adventure.currentRoom.foe.reveal()
  }
  var input = readlineSync.question('> ')
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
    if (
      adventure.currentRoom.dark &&
      !adventure.adventurer.light &&
      adventure.currentRoom.numActions > 1
    ) {
      if (Math.floor(Math.random() * 5) == 2) {
        console.log(
          'You feel a hand cold as ice close around your wrist. It is the last thing you will ever feel, as you have been consumed by a ghoul in the dark.\n **** GAME OVER ****'
        )
        break
      }
    }
  }
}
