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
    var output = []
    var objects = []
    if (this.contents.length > 0) {
      output.push(this.name + ' contents:')
      for (var i = 0; i < this.contents.length; i++) {
        output.push('+ ' + this.contents[i].name)
        objects.push(this.contents[i])
      }
    } else {
      output.push("It's empty.")
    }
    var out = [output, objects]
    return out
  }
}

class Door {
  constructor (locked) {
    this.locked = locked
  }
}

class Weapon extends Item {}

function printItem (item) {
  if (item.where) return item.where
  else return 'There is a ' + item.name + ' here. '
}

function examine (item) {
  if (item.description.length > 1) return item.description
  else return "There's nothing special about it."
}
