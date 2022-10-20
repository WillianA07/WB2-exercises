var time = 23;

if (time >= 0 && time < 9)
{
    greeting = "Good morning!";
}
else if (time >= 9 && time < 16) {
    greeting = "Good day!";
}
else {
    greeting = "Good evening!"
}

console.log(greeting)