class Character {
  constructor (health) {
    this.health = health
    inventory = new Container('inventory', '', '', '')
  }

  generateAttack (weapon) {}

  takeDamage (dmg) {
    health -= dmg
  }

  take (object) {
    inventory.contents.push(object)
  }
}

class Hero extends Character {
  name = 'Xyzzy'

  recover () {
    if (health < 10) health++
  }
  generateAttack (weapon) {}
}

class Thief extends Character {
  name = 'thief'
}

class Troll extends Character {
  name = 'troll'
}

/* class Character {
    constructor(brain, combat, appearance){
        this.brain = brain
        this.combat = combat
        this.appearance = appearance
    }
}

class Brain{
    constructor() {}

} */
