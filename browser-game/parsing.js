class TextParser {
  constructor () {
    this.attackWords = ['stab', 'attack', 'swing', 'hit', 'strike']
    this.possessionWords = ['take', 'grab', 'keep']
    this.objectNouns = ['letter', 'mailbox']
    this.enemyWords = ['ghost', 'bat', 'bats', 'swarm']
    this.directionWords = ['north', 'east', 'south', 'west']
    this.senseWords = ['look', 'examine', 'read']
  }

  processText (input) {
    input = input.replace(/\s{2,}/g, '')
    var tokens = input.split(' ')

    if (tokens.length > 0) {
      // Attacking
      if (this.attackWords.includes(tokens[0])) {
        if (this.enemyWords.includes(tokens[1])) {
          return 'attack ' + tokens[1]
        } else {
          return 'Attack what?'
        }
      }
      // Re-examine the room
      else if (input == 'look around') {
        return input
      }
      // Picking something up
      else if (this.possessionWords.includes(tokens[0])) {
        return 'take ' + tokens[1]
      }
      // Reading/Examining
      else if (this.senseWords.includes(tokens[0])) {
        return 'examine ' + tokens[1]
      }
      // Moving rooms
      else if (this.directionWords.includes(tokens[0])) {
        return 'move ' + tokens[0]
      } else {
        return 'Could you repeat that?'
      }
    }
  }
}
