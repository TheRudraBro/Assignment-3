/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
let currentSalary = startingSalary;

for(let salary=1; salary<=experience; salary++)
{
currentSalary = currentSalary + (currentSalary * 0.05);
}
console.log(currentSalary.toFixed(2));


