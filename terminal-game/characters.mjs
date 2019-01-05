import { Item, Container, Door } from './features'

class Character {
  constructor (health) {
    this.health = health
    this.inventory = new Container('inventory', '', '', '', [
      new Item('lint', 'A few pieces of lint.', '', '')
    ])
  }

  generateAttack (weapon) {}

  takeDamage (dmg) {
    health -= dmg
  }
}

class Hero extends Character {
  constructor (health) {
    super(health)
    this.light = false
    // this.inventory = new Container('inventory', '', '', '')
  }

  take (object) {
    if (object.name == 'flashlight') {
      this.light = true
    }
    this.inventory.add(object)
    console.log('Taken. ' + object.takenText)
  }

  showInventory () {
    // console.log(this.inventory)
    this.inventory.open()
    this.inventory.open = false
  }
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
