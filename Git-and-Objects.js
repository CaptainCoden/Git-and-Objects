//  2d arrays
const animalArr = [
    ["name", "Lilly"],
    ["species", "Canus lupis familiaris"],
    ["age", 5],
    ["favToys", ["red ball", "dino plushie", "Kong bone"] ]
];

// console.log(animalArr[0][1]);

// OBJECTS
// JSON: Javascript Object Notation
// New data type: biggest point to remember is key-value pairs
const animalObj = {
    "name": "Lilly",
    "species": "Canis lupis familiaris",
    "age": 5,
    "favToys": [
        "red ball",
        "dino plushie",
        "Kong bone"
    ]
};

// how to access a key-value pair on an obj
console.log(animalObj["name"]);
console.log(animalObj["favToys"][2]);

// JSON.stringify()
// Turns a JSON object into a string
let stringifyVal = JSON.stringify(animalObj);
console.log(stringifyVal);

// JSON.parse()
// Turns a JSON string into an object
let parsedVal = JSON.parse(stringifyVal);
console.log(parsedVal);