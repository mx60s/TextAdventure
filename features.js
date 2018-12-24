class Item {
  constructor (name, description, abilities, where) {
    this.name = name
    this.description = description
    this.abilities = abilities // this is a simplified version of how it should be
    this.where = where // can I give this a default value? "There is a ______ here."
  }

  print () {
    if (where) return where
    else return 'There is a ' + name + ' here.'
  }

  examine () {
    if (description.length > 1) return description
    else return "There's nothing special about it."
  }
}

class Container extends Item {
  constructor (contents) {
    super(constructor)
  }
}

class Door extends Item {
  locked = false
}

class Weapon extends Item {}
