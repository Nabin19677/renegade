exports.genDoc = (characters, document) => {
  if (document == "") {
    return true;
  }

  let charactersHash = {};
  let charactersArray = characters.split("");
  for (let i = 0; i < charactersArray.length; i++) {
    if (charactersHash.hasOwnProperty(charactersArray[i])) {
      charactersHash[charactersArray[i]] += 1;
    } else {
      charactersHash[charactersArray[i]] = 1;
    }
  }

  let documentHash = {};
  let documentCharArray = document.split("");
  for (let i = 0; i < documentCharArray.length; i++) {
    if (documentHash.hasOwnProperty(documentCharArray[i])) {
      documentHash[documentCharArray[i]] += 1;
    } else {
      documentHash[documentCharArray[i]] = 1;
    }
  }

  let docAllChars = document.split("");
  for (let i = 0; i < docAllChars.length; i++) {
    if (
      !charactersHash.hasOwnProperty(docAllChars[i]) &&
      documentHash[docAllChars[i]] != charactersHash[docAllChars[i]]
    ) {
      return false;
    }
  }

  return true;
};
