function isPalindrome(word: string): boolean {
  return word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
}

console.log(isPalindrome('Sercan'));
console.log(isPalindrome('redivider'));
