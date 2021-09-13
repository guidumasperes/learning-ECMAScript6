const id = Symbol();

const courseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course" //There's no conflict with symbol id
};

//Lets five a unique id to our couseInfo object
courseInfo[id] = 41284;
console.log(courseInfo);