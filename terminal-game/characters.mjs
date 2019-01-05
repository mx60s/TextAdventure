import { Item, Container, Door } from './features'

class Character {
  constructor (health) {
    this.health = health
    this.inventory = new Container('inventory', '', '', [])
  }

  generateAttack (weapon) {}

  takeDamage (dmg) {
    health -= dmg
  }

  take (object) {
    this.inventory.contents.push(object)
    console.log('Taken.')
  }

  showInventory () {
    this.inventory.open()
    this.inventory.open = false
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

export { Character, Hero, Ghost, Bat }
