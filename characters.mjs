import { Item, Container, Door } from './features'

class Character {
  constructor (health) {
    this.health = health
    this.inventory = new Container('inventory', '', '', '')
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
  constructor (health) {
    super(health)
    // this.inventory = new Container('inventory', '', '', '')
  }

  recover () {
    if (health < 10) health++
  }
  generateAttack (weapon) {}
}

class Thief extends Character {
  constructor (health) {
    super(health)
  }
}

class Troll extends Character {
  constructor (health) {
    super(health)
  }
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

export { Character, Hero, Thief }
