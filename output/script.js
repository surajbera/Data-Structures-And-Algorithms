// 04-Count-words-with-prefix
function countWordsWithPrefix(arr, prefix) {
    return arr.reduce(function (count, word) {
        return count + (word.startsWith(prefix) ? 1 : 0);
    }, 0);
}
console.log('Helo');
console.log(countWordsWithPrefix(["pay", "attention", "practice", "attend"], 'code'));
