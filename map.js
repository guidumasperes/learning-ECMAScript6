//Map object holds key/value pairs
let course = new Map();

//Let's set some values
course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});

console.log(course);
console.log(course.get("react"));
console.log(course.get("jest"));

//Let's define our values now in the constructor
let details = new Map([
    [new Date(), "today"],
    [2, {javacript: ["js", "node", "react"]}],
    ["items", [1, 2]]
]);

//We can check for maps size
console.log(details.size);
console.log(details);