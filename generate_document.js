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

  let docAllChars = document.split("");
  console.log(docAllChars);
  for (let i = 0; i < docAllChars.length; i++) {
    console.log(docAllChars[i], charactersHash[docAllChars[i]]);
    if (
      !charactersHash.hasOwnProperty(docAllChars[i]) &&
      docAllChars[i] == charactersHash[docAllChars[i]]
    ) {
      return false;
    }
  }

  console.log("End");
  return true;
};
