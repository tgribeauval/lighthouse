// Create your own map function:
var map = function(a, callBack) {
 var newArray = [];
 for (var i = 0; i < a.length; i++) {
  newArray.push(callBack(a[i]))
 }
 console.log(newArray);
 return newArray;
}






var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
