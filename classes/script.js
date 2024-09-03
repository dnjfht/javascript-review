// class Person {
//   constructor(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
//   }

//   introduce() {
//     return `Hello my name is ${this.name}`;
//   }

//   static multipleNumbers(x, y) {
//     return x * y;
//   }
// }

// const john = new Person("john", "john@abc.com", "7-10-91");
// console.log(john);
// Person {name: 'john', email: 'john@abc.com', birthday: Wed Jul 10 1991 00:00:00 GMT+0900 (한국 표준시)}
// [[Prototype]] : Object constructor : Class Person introduce : introduce()
// console.log(Person.multipleNumbers(2, 9)); // 18

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name}`;
  }
}

class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);

    this.phone = phone;
    this.address = address;
  }
}

const john = new Client("John", "john@example.com", "010-0000-0000", "서울");
john.introduce(); // Hello my name is John
