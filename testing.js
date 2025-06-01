let string = "Hello, World!";
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString(string));

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome(string));