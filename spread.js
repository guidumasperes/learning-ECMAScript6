let maleCats = ["Billy", "Belo"];
let femaleCats = ["Lilica", "Mel"];

let cats = [...maleCats, ...femaleCats];

console.log(cats);

//You can use spread ops with objects too

const bedroom = {
    bed: 1,
    wardrobe: 1,
    desk: 1
}

const kitchen = {
    fridge: 2,
    oven: 1,
    sink: 2,
}

const house = {
    ...bedroom,
    ...kitchen
}

console.log(house);