function createCat(name, typeOfMeow) {
    return {
        name,
        typeOfMeow,
        doMeow: function() {
            return typeOfMeow;
        }
    }
}

const belo = createCat("Belo", "Maaa");
const lilica = createCat("Lilica", "Miii");

console.log(`This is ${lilica.name} meow: ${lilica.doMeow()}`);
console.log(`This is ${belo.name} meow: ${belo.doMeow()}`);