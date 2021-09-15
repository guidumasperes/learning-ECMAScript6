for (let letter of "JavaScript") {
    console.log(letter);
}

const topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/JavaScript");

for (topic of topics) {
    console.log(`The topic is ${topic[0]} and the route is '${topic[1]}'`);
}

for (topicKey of topics.keys()) {
    console.log(topicKey);
}

for (topicValue of topics.values()) {
    console.log(topicValue);
}
