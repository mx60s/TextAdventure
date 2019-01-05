class Item {
  constructor (name, description, where) {
    this.name = name
    this.description = description
    this.where = where
  }
}

class Container extends Item {
  constructor (name, description, where, contents) {
    super(name, description, where)
    this.contents = contents
  }

  open () {
    var objects = []
    if (this.contents.length > 0) {
      console.log(this.name + ' contents:')
      for (var i = 0; i < this.contents.length; i++) {
        console.log('+ ' + this.contents[i].name)
        objects.push(this.contents[i])
      }
    } else {
      console.log("It's empty.")
    }
    return objects
  }
}

class Light extends Item {
  constructor (name, description, where){
    super(name, description, where)
    this.on = false
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

export { Item, Light, Container, Door }
