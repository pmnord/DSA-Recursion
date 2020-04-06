// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
  if (str.length === 1) {return str};

  // Split the first char and the remaining chars
  const firstChar = str.charAt(0);
  const remainingStr = str.slice(1);

  // Concatinate the chars in reverse order
  return reverseString(remainingStr) + firstChar;
}
reverseString('Hello World!')
