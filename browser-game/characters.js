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

class Ghost extends Character {
  constructor (health) {
    super(health)
  }
}

class Bat extends Character {
  constructor (health) {
    super(health)
  }
}
