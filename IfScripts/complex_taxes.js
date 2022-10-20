// Weekly gross pay
var payRate = 100.00;
var hoursWorked = 40;
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

// Tax withheld
var annualGross = grossPay * 52;
var status = "Single";

if (status == "Single") {
    // single less than 12K
    if (annualGross < 12000) {
        taxRate = 0.05;
    }
    // single 12k - <25k
    else if (annualGross >= 12000 && annualGross < 25000) {
        taxRate = 0.1;
    }
    // single 25k - <75k
    else if (annualGross >= 25000 && annualGross < 75000) {
        taxRate = 0.15;
    }
    //single 75k>
    else {
        taxRate = 0.2;
    }
}

else {
    // joint less than 12K
    if (annualGross < 12000) {
        taxRate = 0;
    }
    // joint 12k - <25k
    else if (annualGross >= 12000 && annualGross < 25000) {
        taxRate = 0.06;
    }
    // joint 25k - <75k
    else if (annualGross >= 25000 && annualGross < 75000) {
        taxRate = 0.11;
    }
    // joint 75k>
    else if (annualGross > 75000) {
        taxRate = 0.2;
    }
}

var withelds = grossPay * taxRate
var netPay = grossPay - withelds

console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $" + payRate.toFixed(2) + " per hour, your gross pay is $" + grossPay.toFixed(2));
console.log("Your filing status is " + status);
console.log("Your tax withholdings this period is $" + withelds.toFixed(2));
console.log("Your net pay is $" + netPay.toFixed(2));