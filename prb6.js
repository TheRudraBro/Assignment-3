var experience = 30;
var startingSalary = 45000;

let currentSalary = startingSalary;

for(let salary=1; salary<=experience; salary++)
{
currentSalary = currentSalary + (currentSalary * 0.05);
}
console.log(currentSalary.toFixed(2));


