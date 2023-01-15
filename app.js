function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

Math.max(13,4,5,6,7,8,91,199,1233,145599);
// expecting many different arguments

const nums = [13,4,5,6,7,8,91,199,1233,145599];

Math.max(...nums); // === Math.max(13,4,5,6,7,8,91,199,1233,145599)