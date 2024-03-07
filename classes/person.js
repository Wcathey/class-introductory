class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(arr) {
    if(!Array.isArray(arr)) {
      throw Error("introducePeople only takes an array as an argument.")

    }
    for(let pupil of arr) {
      if(pupil instanceof Person === false) {
        throw Error("All items in array must be Person class instances.")
      }
    }
    arr.forEach(person => {
      person.introduce();
    })
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
