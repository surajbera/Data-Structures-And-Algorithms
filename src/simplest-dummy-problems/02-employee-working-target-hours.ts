// Number of Employees Who Met the Target

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    return hours.filter((hour) => {
      return hour >= target
    }).length
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2))
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6))