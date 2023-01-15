function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

Math.max(13,4,5,6,7,8,91,199,1233,145599);
// expecting many different arguments

const nums = [13,4,5,6,7,8,91,199,1233,145599];

Math.max(...nums); // === Math.max(13,4,5,6,7,8,91,199,1233,145599)

let str = "hello!";
console.log(...str);

const cats = ['Stephen', 'bluey'];

// create a copy of cats
const copy = [...cats];

const dogs = ['Marxists112', 'WhyRUReadingThis'];

// combine arrays.
const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: 'Feline'};
const canine = {legs: 4, family: 'Canaine'};

// combine
const catDog = {...feline, ...canine};
// who's family property will copy over?
// canine, because it comes second.
// if we want to customize it...
// const catDog = {...feline, ...canine, family: 'Mills'}

// rest

function sum(...nums) {
    return nums.reduce((total, num) => total += num);
}

// i stole this from an AI
const randomInts = [...Array(5)].map(() => Math.floor(Math.random() * 10));

const [firstNumber, secondNumber, ...theRestOfTheNumbers] = randomInts;

const arr = [1, 2, 3, 4];

// destructuring
let [first, second, third, fourth] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4

// rest syntax
// const arr = [1, 2, 3, 4, 5, 6];

// let [first, second, ...rest] = arr;

// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5, 6]


