

var myarray1 =[10, 2, 5, 1, 9];
myarray1.sort(function(a,b){
    return a - b
})

console.log(myarray1);



// Say we have a list of students that we would like to sort in alphabetical order. If students have the same name, then we prioritize the older student first.


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



students.sort(function(a,b) {
  var nameA = a.name;
  var nameB = b.name;
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  if (nameA == nameB) {
    return a.age - b.age;
  }

});
  console.log(students);
