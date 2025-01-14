// Add Digits

function addDigits(num: number): number {
    let stringVal = num.toString()
    let arr = stringVal.split('')
    return arr.reduce((sum, number) => sum + Number(number), 0)
};