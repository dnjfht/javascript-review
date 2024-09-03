let user = {
  name: "John",
  age: 45,
};

console.log(user.name); // John
console.log(user.hasOwnProperty("email")); // false
// user 객체 안에는 hasOwnProperty 메소드가 없는데, 어디서 온 것일까?

// 생성자(constructor) 함수 => 다른 객체를 만드는 함수.
// function Person(name, email, birthday) {
//   this.name = name;
//   this.email = email;
//   this.birthday = new Date(birthday);
// }

function Person(name, email, birthday) {
  let person = Object.create(personPrototype);
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

// return을 안 해도 자동으로 객체의 인스턴스를 return 한다.

// calculateAge 메소드만 따로 빼서 프로토타입으로 만들기.
// 방법 1.
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.fetUTCFullYear() - 1970);
// };

// 방법 2.
// Object.create() 메소드는 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만든다.
const personPrototype = {
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.fetUTCFullYear() - 1970);
  },
};

const john = new Person("john", "john@abc.com", "7-10-91");
const han = new Person("han", "han@abc.com", "2-8-91");
// 생성자 함수를 사용해서 객체를 만들 때 new 키워드를 사용.

console.log(john);
// Person {name: 'john', email: 'john@abc.com', birthday: Wed Jul 10 1991 00:00:00 GMT+0900 (한국 표준시), calculateAge: ƒ}
console.log(han);
// Person {name: 'han', email: 'han@abc.com', birthday: Fri Feb 08 1991 00:00:00 GMT+0900 (한국 표준시), calculateAge: ƒ}
// john, han 모두 birthday, email, name 값은 서로 다르지만 calculateAge 프로퍼티의 값은 같다.
// => prototype으로 옮겨두기.
