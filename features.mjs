class Item {
  constructor (name, description, abilities, where) {
    this.name = name
    this.description = description
    this.abilities = abilities // this is a simplified version of how it should be
    this.where = where // can I give this a default value? "There is a ______ here."
  }
}

class Container extends Item {
  constructor (name, description, contents) {
    super(name, description, '', '')
    this.contents = contents
  }
}

class Door {
  constructor (locked) {
    this.locked = locked
  }
}

class Weapon extends Item {}

export function printItem (item) {
  if (item.where) return item.where
  else return 'There is a ' + item.name + ' here. '
}

export function examine (item) {
  if (item.description.length > 1) return item.description
  else return "There's nothing special about it."
}

export { Item, Container, Door }
