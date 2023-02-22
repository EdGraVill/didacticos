const user1 = {
  name: 'John',
  age: 34,
  hobby: 'Soccer',
  isMarried: false,
  spells: ['abrakadabra', 'shazam', 'boo'],
  shout: function() {
    console.log('AHHHHHHH!');
  },
}

const user2 = {
  name: 'Jane',
  age: 28,
  hobby: 'Soccer',
  isMarried: true,
  spells: ['abrakadabra', 'shazam', 'boo'],
  shout: function() {
    console.log('AHHHHHHH!');
  },
  friends: [user1, 'Pedro', 'Juan'],
}

const user3 = user1;

console.log(user1.name);
console.log(user2.friends[0].name);
console.log(user2.friends[1].name);

class User {
  constructor(name, age, hobby, isMarried) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.isMarried = isMarried;
  }

  shout() {
    console.log(this.name, 'says:', 'AHHHHHHH!');
  }
}

const eduardo = new User('Eduardo', 34, 'Soccer', false);
console.log(eduardo);
eduardo.shout();

const salvador = new User('Salvador', 34, 'Soccer', false);
salvador.shout();


class String {
  constructor(value) {
    this.value = value;
  }

  toUpperCase() {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      // Check if the character is a lowercase letter
      if (charCode >= 97 && charCode <= 122) {
        // Convert to uppercase by adding the difference between the uppercase and lowercase char codes
        result += String.fromCharCode(charCode - 32);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  }
}
