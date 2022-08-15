function isPalindrome(word: string): boolean {
  return word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
}
