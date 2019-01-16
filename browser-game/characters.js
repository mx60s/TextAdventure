class Character {
  constructor (health, weapon) {
    this.health = health
    this.weapon = weapon
    this.inventory = new Container('inventory', '', '', '', [
      new Item('lint', 'A few pieces of lint.', '', '')
    ])
  }

  generateAttack (weapon) {}

  takeDamage (dmg) {
    health -= dmg
  }
}

class Spirit extends Character {
  constructor () {
    super(12, new Weapon('claws', '', '', 5, 5, ''))
  }

  reveal () {
    console.log(
      'The spirit turns around to reveal herself, once-human eyes glaring at you with blind rage. In a flash she flies at you with her long nails bared.\n'
    )
  }
}

class Bat extends Character {
  constructor () {
    super(5, new Weapon('teeth', '', '', 3, 3, ''))
    this.name = 'bat'
  }

  reveal () {
    return 'You hear a burst of flapping wings as suddenly a bat flies at your face, flashing its teeth and screeching.'
  }
}

class Hero extends Character {
  constructor (health) {
    super(health)
    this.light = false
    // this.inventory = new Container('inventory', '', '', '')
  }

  recover () {
    if (health < 10) health++
  }

  take (object) {
    if (object.name == 'flashlight') {
      this.light = true
    }
    this.inventory.add(object)
    return object.takenText
  }

  showInventory () {
    // console.log(this.inventory)
    this.inventory.open = false
    return this.inventory.open() // check the output on this
  }
}
