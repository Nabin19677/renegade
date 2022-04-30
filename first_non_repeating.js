exports.firstNonRepeatingCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
      return str.indexOf(str.charAt(i));
    }
  }
  return -1;
};
