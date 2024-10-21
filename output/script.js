function areAnagrams(str1, str2) {
    var normalize = function (str) { return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join(''); };
    return normalize(str1) === normalize(str2);
}
// Examples of anagrams
var anagramPairs = [
    ["listen", "silent"],
    ["evil", "vile"],
    ["restful", "fluster"],
    ["admirer", "married"],
    ["conversation", "voices rant on"]
];
// Examples of non-anagrams
var nonAnagramPairs = [
    ["hello", "world"],
    ["example", "samples"],
    ["anagram", "nagaram"],
    ["binary", "brainy"],
    ["night", "thing"]
];
console.log("Anagram Pairs:");
anagramPairs.forEach(function (pair) {
    console.log("".concat(pair[0], " and ").concat(pair[1], ": ").concat(areAnagrams(pair[0], pair[1])));
});
console.log("\nNon-Anagram Pairs:");
nonAnagramPairs.forEach(function (pair) {
    console.log("".concat(pair[0], " and ").concat(pair[1], ": ").concat(areAnagrams(pair[0], pair[1])));
});
