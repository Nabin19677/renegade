exports.genDoc = (characters, document) => {
  if (document == "") {
    return true;
  }

  let charactersHash = {};
  let charactersArray = characters.split("");
  for (let i = 0; i < charactersArray.length; i++) {
    let char = charactersArray[i];
    if (charactersHash.hasOwnProperty(char)) {
      charactersHash[char] += 1;
    } else {
      charactersHash[char] = 1;
    }
  }

  let documentCharArray = document.split("");
  for (const key of documentCharArray) {
    if (!charactersHash.hasOwnProperty(key) || charactersHash[key] <= 0) {
      return false;
    } else {
      charactersHash[key] -= 1;
    }
  }

  return true;
};
