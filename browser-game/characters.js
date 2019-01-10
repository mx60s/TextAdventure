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
    return 'Taken.'
  }

  showInventory () {
    var out = this.inventory.open()
    // console.log(out[0])
    var output = out[0]
    this.inventory.open = false
    return output
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
    console.log(
      'You hear a burst of flapping wings as suddenly a bat flies at your face, flashing its teeth and screeching.\n'
    )
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

  showInventory () {
    // console.log(this.inventory)
    this.inventory.open = false
    return this.inventory.open() // check the output on this
  }
}

/* class Ghost extends Character {
  constructor (health) {
    super(health)
  }
}

class Bat extends Character {
  constructor (health) {
    super(health)
  }
}
 */