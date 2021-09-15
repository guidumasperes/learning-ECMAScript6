class RpgMage {
    constructor(name, mana, spells) {
        this.name = name;
        this.mana = mana;
        this.spells = spells;
    }
    increaseManaPoints() {
        ++this.mana;
    }
    addSpell(spellName) {
        this.spells.push(spellName);
    }
}

const gandalf = new RpgMage("Gandalf", 1000, ["fireball", "icebolt", "rain of destruction"]);

console.log(gandalf.name, gandalf.mana, gandalf.spells);

gandalf.increaseManaPoints();
gandalf.addSpell("summon goblin");

console.log(`This is ${gandalf.name} after leveling up:`);
console.log(gandalf.name, gandalf.mana, gandalf.spells);

console.log("\n------------------------------------------------------------------------\n");

//We can extend classes like in any other programming languages
class RpgDarkMage extends RpgMage {
    constructor () {
        super("Saruman", 900, ["shadow bolt", "summon zombie", "life steal"]);
    }
}

const saruman = new RpgDarkMage();

console.log(saruman);