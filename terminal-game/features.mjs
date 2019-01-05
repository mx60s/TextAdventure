class Item {
  constructor (name, description, where, takenText) {
    this.name = name
    this.description = description
    this.where = where
    if (takenText.length > 0) this.takenText = takenText
    else this.takenText = 'You stuff it in your coat pocket.'
  }
}

class Container extends Item {
  constructor (name, description, where, takenText, contents) {
    super(name, description, where, takenText)
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
  add (object) {
    this.contents.push(object)
  }
}

class Door {
  constructor (locked) {
    this.locked = locked
  }
}

class Weapon extends Item {
  // speed a 1-5 scale, strength being the max damage it may take
  constructor (name, description, where, strength, speed, takenText) {
    super(name, description, where, takenText)
    this.strength = strength
    this.speed = speed
  }
}

export function printItem (item) {
  if (item.where) return item.where
  else return 'There is a ' + item.name + ' here. '
}

export function examine (item) {
  if (item.description.length > 1) return item.description
  else return "There's nothing special about it."
}

export { Item, Container, Door, Weapon }
