// 04-Count-words-with-prefix
// Write a function that takes an array of words and a prefix as arguments and returns the number of words that have the given prefix.

function countWordsWithPrefix(arr: string[], prefix: string): number {
  return arr.reduce((count: number, word: string) => {
    return count + (word.startsWith(prefix) ? 1 : 0)
  }, 0)
}

console.log(countWordsWithPrefix(["pay","attention","practice","attend"], 'code'))