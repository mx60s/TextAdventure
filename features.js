class Item{
    constructor(name, description, abilities, size){
        this.name = name;
        this.description = description;
        this.abilities = abilities;     // this is a simplified version of how it should be
        this.size = size;
    }
}

class Door extends Item {
    lock = false;
}