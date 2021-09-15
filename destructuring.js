//Array destructuring
const cats = ["Billy", "Belo", "Lilica", "Mel"];

const [billy, belo, lilica, mel] = cats;

console.log(billy, belo, lilica, mel);

//Object destructuring
const bedroom = {
    bed: 1,
    wardrobe: 1,
    desk: 1
}

const {bed, wardrobe, desk} = bedroom;

console.log(bed, wardrobe, desk);