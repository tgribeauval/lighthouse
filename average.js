function average(list) {
  var sum = 0;


  for (var num of list) {
    sum += num;
  }

  return sum / list.length;
}

console.log(average([3, 5, 7]));







var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');
}
