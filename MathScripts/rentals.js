var people = 38;
var vansNeeded = Math.ceil(people / 15);

var vanCost = 250;
var vanTotal = vansNeeded * vanCost;

var perPersonPays = vanTotal / people

console.log(perPersonPays.toFixed(2));

console.log(perPersonPays * people);

console.log(vanTotal)