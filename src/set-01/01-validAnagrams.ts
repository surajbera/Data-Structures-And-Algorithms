function validAnagrams(str1: string, str2: string) {
  if(str1.length !== str2.length) {
    return false
  }
  
  let str1Map: {[key: string]: number} = {}
  let str2Map: {[key: string]: number} = {}

  for(let char of str1) {
    str1Map[char] = (str1Map[char] || 0) + 1
  }
  for (let char of str2) {
    str2Map[char] = (str2Map[char] || 0) + 1
  }

  for(let key in str1Map) {
    if(!(key in str2Map)) {
      return false;
    }
    if(str1Map[key] !== str2Map[key]) {
      return false;
    }
  }

  return true;
}

validAnagrams('hello', 'world')
validAnagrams('restful', 'fluster')
validAnagrams('hello', 'world')