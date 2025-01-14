function isPalindrome(s: string): boolean {
  let formattedS = s.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase()

  if(formattedS === '') {
      return true
  }

  // convert the string into an array
  let sArr = formattedS.split('')

  // first reverse the string
  let left = 0;
  let right = sArr.length;

  while(left < right) {
    debugger;
      let temp = sArr[left];
      sArr[left] = sArr[right];
      sArr[right] = temp;

      left++;
      right--;
  }

  let reversedS = sArr.join('');
  
  if(reversedS === formattedS) {
      return true;
  }
  return false;
}

isPalindrome("A man, a plan, a canal: Panama")