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
    return "Taken."
  }

  showInventory() {
    var out = this.inventory.open()
    console.log(out[0])
    var output = out[0]
    this.inventory.open = false
    return output
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
