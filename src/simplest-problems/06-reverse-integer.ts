function reverseInteger(x: number): number {
  if (x === null || x === undefined) {
    throw new Error('Input must be a number')
  }

  let sign = x < 0 ? -1 : 1;
  let reversedNumber = 0
  x = Math.abs(x)

  while (x > 0) {
    debugger;
    let lastDigit = x % 10;
    reversedNumber = reversedNumber * 10 + lastDigit;
    x = Math.floor(x / 10)
  }

  return reversedNumber * sign;
}

// console.log(reverseInteger(20))
// console.log(reverseInteger(-20))
console.log(reverseInteger(1534236469))

9646324351