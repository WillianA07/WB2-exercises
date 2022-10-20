var payRate = 17.50;
var hoursWorked = 45;
var otPayRate = (payRate * 1.5);
var otHoursWorked = hoursWorked - 40;


if (hoursWorked <= 40 )
{
    grossPay = (payRate * hoursWorked)
}

else 
{
    grossPay = ((payRate * 40) + (otPayRate * otHoursWorked))
}

console.log("If you worked " + hoursWorked + " hours with a $" + payRate.toFixed(2) + " your gross pay will be $" + grossPay.toFixed(2))
