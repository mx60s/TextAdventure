class TextParser {
  constructor () {
    attackWords = ['stab', 'attack', 'swing', 'hit', 'strike']
    posessionWords = ['take', 'grab', 'keep']
    objectNouns = ['letter', 'mailbox']
    enemyWords = ['ghost', 'bat', 'bats', 'swarm']
    directionWords = ['north', 'east', 'south', 'west']
    senseWords = ['look', 'examine', 'read']
  }

  processText (input) {
    input = input.replace(/\s{2,}/g, '')
    var tokens = input.split(' ')

    if (tokens.length > 1) {
      // Attacking
      if (attackWords.includes(tokens[0])) {
        if (enemyWords.includes(foe)) {
          var enemyName = tokens[1]
          if (currentRoom.foe.name == enemyName) {
            return 'attack'
          } else return "You don't see " + enemyName + ' in this room.'
        } else {
          return 'Attack what?'
        }
      }
      // Picking something up
      else if (objectWords.includes(tokens[0])) {
      }
      // Reading/Examining
      else if (senseWords.includes(tokens[0])) {
      } else if (directionWords.includes(tokens[0])) {
        moveRooms(tokens[0])
      } else {
        return 'Could you repeat that?'
      }
    }
  }
}
