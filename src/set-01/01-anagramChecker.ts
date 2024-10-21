function areAnagrams(str1: string, str2: string): boolean {
  const normalize = (str: string): string => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

// Examples of anagrams
const anagramPairs: [string, string][] = [
  ["listen", "silent"],
  ["evil", "vile"],
  ["restful", "fluster"],
  ["admirer", "married"],
  ["conversation", "voices rant on"]
];

// Examples of non-anagrams
const nonAnagramPairs: [string, string][] = [
  ["hello", "world"],
  ["example", "samples"],
  ["anagram", "nagaram"],
  ["binary", "brainy"],
  ["night", "thing"]
];

console.log("Anagram Pairs:");
anagramPairs.forEach(pair => {
  console.log(`${pair[0]} and ${pair[1]}: ${areAnagrams(pair[0], pair[1])}`);
});

console.log("\nNon-Anagram Pairs:");
nonAnagramPairs.forEach(pair => {
  console.log(`${pair[0]} and ${pair[1]}: ${areAnagrams(pair[0], pair[1])}`);
});