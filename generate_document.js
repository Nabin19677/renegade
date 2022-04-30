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

  let documentHash = {};
  let documentCharArray = document.split("");
  for (let i = 0; i < documentCharArray.length; i++) {
    let char = documentCharArray[i];
    if (documentHash.hasOwnProperty(char)) {
      documentHash[char] += 1;
    } else {
      documentHash[char] = 1;
    }
  }

  for (const key in documentHash) {
    if (
      !charactersHash.hasOwnProperty(key) ||
      documentHash[key] > charactersHash[key]
    ) {
      return false;
    }
  }

  return true;
};
