class Item {
  constructor (name, description, abilities, size, where) {
    this.name = name
    this.description = description
    this.abilities = abilities // this is a simplified version of how it should be
    this.size = size
    this.where = where // can I give this a default value?
  }

  print () {
    return 'There is a ' + name
  }

  examine () {
    if (description.length > 1) return description
    else return "There's nothing special about it."
  }
}

class Door extends Item {
  locked = false
}

class Weapon extends Item {}
