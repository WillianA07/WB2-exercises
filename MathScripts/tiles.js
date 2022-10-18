var lengthInFeet = 12;
var widthInFeet = 12;
var roomSquareFootage = lengthInFeet * widthInFeet;

var squareFootageRequired = roomSquareFootage + (roomSquareFootage * 0.1);

console.log(roomSquareFootage);
console.log(squareFootageRequired);

var boxesneeded = Math.ceil(squareFootageRequired / 12);

console.log(boxesneeded);