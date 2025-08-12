const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedString = str
    .toLowerCase()
    .split('')
    .filter( c => alphanumerical.includes(c))
    .join('');
  
  const reversed = cleanedString
    .split('')
    .reverse()
    .join('');

  return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
