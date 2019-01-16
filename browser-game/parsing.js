class TextParser {
  constructor () {
    this.attackWords = ['stab', 'attack', 'swing', 'hit', 'strike']
    this.possessionWords = ['take', 'grab', 'keep']
    this.objectNouns = ['letter', 'mailbox', 'key']
    this.enemyWords = ['spirit', 'bat', 'bats', 'swarm']
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
      else if (input == 'look around' || input == 'inventory') {
        return input
      }
      // Picking something up
      else if (this.possessionWords.includes(tokens[0])) {
        if (tokens[1] == 'mailbox') {
          return "Of course you can't take the mailbox. Smartass."
        } else if (this.enemyWords.includes(tokens[1])) {
          return "You can't take prisoners, what's wrong with you?"
        } else return 'take ' + tokens[1]
      }
      // Reading/Examining
      else if (this.senseWords.includes(tokens[0])) {
        return 'examine ' + tokens[1]
      }
      // Moving rooms
      else if (this.directionWords.includes(tokens[0])) {
        return 'move ' + tokens[0]
      }
      // Opening something
      else if (tokens[0] == 'open') {
        return 'open ' + tokens[1]
      }
      // Help
      else if (tokens[0] == 'help') {
        var helptext =
          'Moving around: [north | south | east | west]    Pick something up: [take | grab | keep] <object name>    Examine things: [examine | look | read] <object name>    Attacking: [stab | attack | swing | hit | strike] <enemy name>'
        return helptext
      } else {
        return "I'm sorry, I don't understand that."
      }
    }
  }
}
