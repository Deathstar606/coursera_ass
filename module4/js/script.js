var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i in names) {
  if (names[i].charAt(0) == 'J') {
    console.log('Goodbye ' + names[i])
  }
  else {
    console.log('Hello ' + names[i])
  }

}

