exports.genDoc = (characters, document) => {
  if (document == "") {
    return true;
  }
  let charactersHash = {};
  let charactersArray = characters.split(" ");
  charactersHash["spaces"] = charactersArray.length - 1;
  for (let i = 0; i < charactersArray.length; i++) {
    if (charactersArray[i] == "") {
      charactersHash.spaces += 1;
    } else {
      let charArray = charactersArray[i].split("");
      for (let j = 0; j < charArray.length; j++) {
        if (charactersHash.hasOwnProperty(charArray[j])) {
          charactersHash[charArray[j]] += 1;
        } else {
          charactersHash[charArray[j]] = 1;
        }
      }
    }
  }

  let documentHash = {};
  let documentsArray = document.split(" ");

  documentHash["spaces"] = documentsArray.length;

  for (let i = 0; i < documentsArray.length; i++) {
    if (documentsArray[i] == "") {
      documentHash.spaces += 1;
    } else {
      let charArray = documentsArray[i].split("");
      for (let j = 0; j < charArray.length; j++) {
        if (documentHash.hasOwnProperty(charArray[j])) {
          documentHash[charArray[j]] += 1;
        } else {
          documentHash[charArray[j]] = 1;
        }
      }
    }
  }

  let docAllChars = document.split("");
  for (let i = 0; i < docAllChars.length; i++) {
    console.log(documentHash[docAllChars[i]], charactersHash[docAllChars[i]]);
    if (
      !charactersHash.hasOwnProperty(docAllChars[i]) &&
      documentHash[docAllChars[i]] != charactersHash[docAllChars[i]]
    ) {
      return false;
    }
  }

  return true;
};
