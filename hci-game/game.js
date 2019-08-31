class Game {
  constructor () {
    this.adventurer = new Hero(10)
    // this.ghost = new Ghost()
    this.rooms = this.generateRooms()
    this.currentRoom = this.rooms[0]
    this.parser = new TextParser()
  }

  generateRooms () {

    var front = new Room(
      'Hallway',
      `You are standing in a dark hallway. There is a door in front of you, slightly ajar and
      issuing a sliver of tenuous light. Behind you, the hallway continues with no end in sight.`,
      false,
      [],
      ''
    )

    var picture = new Item(
      "picture",
      `An unassuming picture of a girl, presumably the one who lives here. (How narcissistic!)<br>
      ...................................................................................................<br>
.........................................,,**,***//////**,,,.......................................<br>
....................................,,,,.,***/(###%%%##//((*,,,,...................................<br>
.................................,.,.,***//*,,*/((#((((////((/,,,..................................<br>
...............................,,,,*///*..*#%&#%%%%#((///*##(*,,.................................<br>
..............................,,**/(/,.*#&%%#(/*********,,*/*(##/,,................................<br>
............................,***/(/,*#&%/*,,.........,,,***/((%%#(,,...............................<br>
...........................,**/((,*%#*..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......,,**//(##%%#(*,,.............................<br>
..........................***/(*/#%*..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........,,,***/(%#%%#(*,.............................<br>
.........................,**/(/#%(.......&nbsp;.........,,,,,****/((%&&(/,............................<br>
.........................****#%#(,................,,,,*****////(#&&(*............................<br>
.........................**/%%#/,..............,,,,,,,******///((%&&/,...........................<br>
.........................*(%(,........,,,,,,,,,***/(#%%%%%#((((%&&&&(*...........................<br>
........................,##%%(*....,/(##%%##(**,**/#%%#(/////((/(#&&&&%(*..........................<br>
........................*#%&((,..,*,,**//((((/,,,*(###%%%##%(((//(&&%&/,.........................<br>
........................,((##(,...,,((%&%@%#(/,.&nbsp;,(#######(/***/%&&%&%#*,........................<br>
........................,*//#(.....,,***///*,,..&nbsp;.*///////*,,,,,*/%&&%&&%(*........................<br>
........................,//(((...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;........&nbsp;&nbsp;.,*,,.......,,**/&&&%%%%(/,.......................<br>
........................./*/#%,..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......&nbsp;&nbsp;&nbsp;&nbsp;.*(*,,....,,,*//%&###(/*.......................<br>
.......................&nbsp;,//*(%,...&nbsp;&nbsp;&nbsp;....,*/,..&nbsp;..,*//#/**,,,**///%&(#((/,.......................<br>
........................**/,/**......,,*/(#//(%(*//#%#//((////////%&%#(##(**,......................<br>
.......................,*,/***,,..,,**//((/,,,*/((##((////(#((////@&%#/(((//*,.....................<br>
.......................,/,((/*(/.,,*//(((*,,,,,,**/((###%%%((////(@&%#(/(//*,,,....................<br>
......................,/,,((///(/,,***(##&@#/*.,&nbsp;*&nbsp;*,*(%#//***///&&&%#(((///,.,,...................<br>
.....................,,**,/#(///(*,,,,,**,,,,,.,**///((///***//(%@&%%((/(///,.,,,..................<br>
....................,,**/,*((//*/%%*,,,,,,....,**///**///***//(@@&%%#((/((/(/*,,*,.................<br>
...................,,,****,((((/*#%@/*,,......,,,,,**//***//(%@@&&%#(/*%##(#//(/*,,................<br>
...................,*,,//**.(##/*##&/*,..........,,,,*//((%@@&&%%((#%%(#(((((//(/**..............<br>
..................,,*,,*/,*/*,##//#&@%#((//,,.....,,,**/(##%%@&&%#%(%(%#(#(((#((##((////...........<br>
...................,,,**/***//*###(%%((((((/*//////(#####%&@&%&%#%#%%((((#(#####/#((*,*/*........<br>
..................,..,.***,*////%/%(%&%#(((///(((((#######%%@&&%%%(&%(/#(###%#%(%%%#(/.,,,,.,....<br>
...............,.,,,,,,/(/**///(%(#%#%&%(((/////((((((####%&&&%%#%%#%%%//((#%%%%&%&(#*,....,...<br>
.................,,,,**(((*,*//#(%(#(#%%(//////////((#####%%##%%%#%%%////#%#(#%&&&&%%#/(/,...,...<br>
.............,,,.,,**,,*/(#,**/(%%#%((&%#//**//////(((((#%%##%######(**((#####(((##((#((//**,....<br>
..............,,.*,(///*,*(/,*/(#%%(%%#(/****/////((((#%%((#%#%####((*/(###%#((//((###%((/*/*,,,.<br>
...............,.,.*(%//(,.*,***#(%%%(%%#((/****/////(((##((%#(%%%%%(((*//%####((((####/*%%##*/,,.,<br>
..........&nbsp;&nbsp;&nbsp;&nbsp;.*.*,*##%(*/*,*/**(##%###((///*//////(((((#(%%%%%%%(##(/((((####(###(//*,,,,*%#(**,<br>
........&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,**.(#/(#(/(,,,(/*//((#%%#((///******////*/#(#(%%#%######*(##(((((((*///***,,.,,,,,*/*<br>
.....&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,**,*((*#//,,.(%//*,//*/#((//*,,,,*,,*,,**/(#%%#%%#%%((#(/##(####(*..../*,,,..,.....*,<br>
...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..,*,**/*,(*,./##((,,,*(*/**,....,,,,,,,,,*,,*/((##%%(###/##(#####(*,*,.&nbsp;.*,.,,.,..,##,<br>
..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;.,/(#,.*,/,(*.//(/(*,,,*(((*,.............,..,,,,,*/(/((/(/#######%/,....&nbsp;&nbsp;&nbsp;&nbsp;.,,,.,/%,*,<br>
.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..,*,,,,(***(#*/,,////.&nbsp;.,/(((/*,....&nbsp;&nbsp;........,....,,,,*(///##(#//(##,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..**(/*(/,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....,,.,/*,/((****.*,,&nbsp;.*,,(///*...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;..&nbsp;....,.,,,,////**,,**(((.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,,/(,,*#*<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...,,,,.****/*,***,.,.&nbsp;..,*(//***.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........,**,*,,,,,***//*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,*/(,,.,,(<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;.,,**,.,,,***,,.,.,.....,/(***,,*,&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...,,,,,,,,,,,,,,,,**,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**#,,.,,**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.,,***,,,,,****.&nbsp;..,.,.&nbsp;&nbsp;.((*,,,,,,*,.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..,,,,,,,,,,,,,,,,,,,*.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.*(*,.,.***<br>
&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;.,,*/*,,.,,,,,,..&nbsp;&nbsp;..&nbsp;&nbsp;.&nbsp;&nbsp;.(/**,,,,,,,,,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,,,,,,,,,,,**,***,,,,**,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.*(*...*,,,<br><br>
  (Actual picture here: mvonebers.co/maggie_portrait.jpeg)`,
      "",
      '',
      "You take the picture, and feel just a little creepy in doing so."
    )

    var diary = new Item(
      "diary",
      `You pick the small journal up and leaf through it. Most of the pages are covered in
      unfinished TO-DO lists and bad puns, but you find one of substance.<br>
      \"Dear Diary...<br>
      It\'s the start of my senior (4th) year, and I\'m taking Human Computer Interaction this semester!
      I wasn't really convinced that this was something I would be interested in until recently - 
      I've been thinking about my career, and I might want to do R&D to create systems for 
      disabled people. It would create a lot of interesting challenges and I would be able to feel
      as if I\'m doing some good with my degree. Hopefully HCI will teach me about how people 
      interact with computers.<br>
      One thing is for sure - this course will be pretty different from what I\'ve taken in the 
      past! Besides all of the required courses, I\'ve taken AI, algorithms, graphics, and info 
      storage & retrival. I\'ve also been moving towards my minor in math with classes like linear 
      algebra and mathematical probability.<br>
      On another note, I\'m really sad to be done with this summer. My internship at Sandia National 
      Laboratories was a good time, and I will especially miss working on supercomputers.`,
      '',
      'You take the diary, though my life really isn\'t that interesting.'
    )

    var myRoom = new Room(
      "My bedroom",
      `You are standing in what looks to be someone's bedroom. She's got a surprising number of plants that 
      don't appear to be well taken care of. A candle is burning. You get the sense that this girl 
      is really funny on twitter.<br>
      A picture sits on her desk, next to a diary.`,
      false,
      [picture, diary],
      ''
    )

    var hallway = new Room (
      "???", 
      `Hey, turn around! You're supposed to be learning about me!!`,
      false,
      [],
      ''
    )

    front.north = myRoom

    front.south = hallway

    hallway.north = front

    myRoom.south = hallway

    var rooms = [front, myRoom, hallway]
    return rooms
  }

  attackTurn (enemyName) {
    if (this.currentRoom.foe.name == enemyName) {
      var attack = adventurer.generateAttack()
      var foeAttack = foe.generateAttack()
      adventurer.takeDamage(foeAttack)
      foe.takeDamage(attack)
      return 'attack happened'
    } else return "You don't see " + enemyName + ' in this room.'
  }

  moveRooms (direction) {
    var output = []
    if (
      this.currentRoom.getNeighbor(direction) &&
      !this.currentRoom.exits[direction].locked
    ) {
      this.currentRoom = this.currentRoom.getNeighbor(direction)
      output = this.currentRoom.print(this.adventurer)
    } else {
      output.push("You can't go that way.")
    }

    if (!this.currentRoom.dark || this.adventurer.light) {
      this.currentRoom.visited = true
    }

    return output
  }

  processCommand (input) {
    this.currentRoom.numActions++
    var command = new String(this.parser.processText(input))
    var commandTokens = command.split(' ')
    var output = []
    switch (commandTokens[0]) {
      case 'inventory':
        output = output.concat(this.adventurer.showInventory())
        break

      case 'attack':
        output.push(attackTurn(commandTokens[1]))
        break

      case 'move':
        output = this.moveRooms(commandTokens[1])
        break

      case 'take':
        // dont forget to remove the thing from the room!!!
        var feature
        var found = false
        for (var i = 0; i < this.currentRoom.features.length; i++) {
          feature = this.currentRoom.features[i]
          if (feature.name == commandTokens[1]) {
            output.push(this.adventurer.take(feature))
            this.currentRoom.features = this.currentRoom.features.filter(
              function (value) {
                return value.name != feature.name
              }
            )
            found = true
          }
        }
        if (!found) {
          output.push("That's not here.")
        }
        break

      case 'examine':
        var feature
        var found = false
        for (var i = 0; i < this.currentRoom.features.length; i++) {
          feature = this.currentRoom.features[i]
          if (feature.name == commandTokens[1]) {
            output.push(examine(feature))
            found = true
          }
        }
        for (var i = 0; i < this.adventurer.inventory.contents.length; i++) {
          // output.push(this.adventurer.inventory.contents[i].name)
          if (this.adventurer.inventory.contents[i].name == commandTokens[1]) {
            output.push(examine(this.adventurer.inventory.contents[i]))
            found = true
          }
        }
        if (!found) {
          output.push("That's not here.")
        }
        break

      case 'look':
        this.currentRoom.visited = false
        output = output.concat(this.currentRoom.print(this.adventurer))
        break

      case 'open':
        if (commandTokens[1] == 'canopy') {
          this.currentRoom.foe = new Bat()
          // this.currentRoom.foe.reveal()
        }
        var feature = this.currentRoom.features[0]
        var objects
        var newOutput
        try {
          var opens = feature.open()
          newOutput = opens[0]
          objects = opens[1]
          output = output.concat(newOutput)
          this.currentRoom.features = this.currentRoom.features.concat(objects)
        } catch {
          output.push("You can't open that.")
        }
        break

      default:
        output.push(command)
    }
    return output
  }
}
