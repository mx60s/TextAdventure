class Character{
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    take_damage(foe_strength){
        this.health -= Math.random * 10 + foe_strength;
    }
}

class Hero extends Character{
    name = "hero";

}

class Grue extends Character {}

class Wizard extends Character {}

class Troll extends Character {}

