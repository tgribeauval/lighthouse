function countLetters(word){
  var letterCountObj = {};
  for (var i = 0;i < word.length; i++){
    console.log(word[i]);
    if (!letterCountObj[word[i]]){
      letterCountObj[word[i]] = 1;
    }
    else {
      letterCountObj[word[i]]++;
    }
  }
  return letterCountObj;
}
console.log(countLetters("banana"));
