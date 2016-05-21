//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
    this.name = "nick",
    this.age = 25
  }


//Now create three instances of Person with data you make up

// var person1 = new Person('fred', 32);
// var person2 = new Person('Daphney', 30);
// var person3 = new Person('scooby' 29);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
person.prototype.sayName = function() {
  alert(this.name);
}
