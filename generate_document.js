exports.genDoc = (characters, document) => {
  if (document == "") {
    return true;
  }

  const charactersHash = {};
  for (let char of characters.split("")) {
    charactersHash[char] = charactersHash.hasOwnProperty(char)
      ? ++charactersHash[char]
      : 1;
  }

  for (let key of document.split("")) {
    if (!charactersHash.hasOwnProperty(key) || charactersHash[key] <= 0) {
      return false;
    } else {
      --charactersHash[key];
    }
  }

  return true;
};
