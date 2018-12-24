var adventure = new Game()
var save = new Game()
var input = ''

console.log('============ Welcome to TextAdventure ============')

while (true) {
  console.log(adventure.currentRoom.print())

  input = prompt('>')
  if (input.length > 0) adventure.processCommand(input)
}
