const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames(users) {
//   return users.map((user) => user.name);
// }

const getUserNames = (users) => users.map((user) => user.name);

// console.log(getUserNames(users));

// Отримати масив імен користувачів за статтю (поле gender)
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// function getUsersByGender(users, userGender) {
//   return users.filter(({ gender }) => gender === userGender).map(user => user.name);
// }

// console.log(getUsersByGender(users, "male"));

// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = (users) =>
  users.reduce((total, user) => (total += user.balance), 0);
// console.log(calculateTotalBalance(users)); // 20916

// / Масив імен всіх користувачів які мають один із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']

//const getSortedUniqueSkills = (users) => users.flatMap((user) => user.skills);
const getSortedUniqueSkills = (users) =>
  users
    .flatMap((user) => user.skills)
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .toSorted();
// console.log(getSortedUniqueSkills(users));

// ! ----------------- PushEax ------------------------

//Повернути об'єкт у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function getTagsCount(tweets) {
//   return tweets
//     .flatMap((tweet) => tweet.tags)
//     .reduce(
//       (prev, cur) => ({
//         ...prev,
//         [cur]: prev[cur] ? prev[cur] + 1 : 1,
//       }),
//       {}
//     );
//   // return tweets.flatMap(tweet => tweet.tags).reduce((prev, cur, ind, arr) => {
//   if (!prev[cur]) {
//     prev[cur] = 1;
//   } else {
//     prev[cur] += 1;
//   }
//   return prev
// }, {})
// }

// console.log(getTagsCount(tweets));

// ! ----------------- Maryna ------------------------

// Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(email, login) {
//     this.#email = email;
//     this.#login = login;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newMail) {
//     this.#email = newMail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// ! -------------------- PushEax -----------------------------

// Напиши клас Notes який управляє колекцією нотаток у властивості items.
//Нотатка це об'єкт із властивостями id, text і priority
//Додай класу статичну властивість Priopity,
//у якій зберігатиметься об'єкт із пріоритетами HIGHT, LOW.
//Додай методи addNote(note), removeNote(id) //updatePriority(text, newPriority)
// getNotes
// #items

class Notes {
  #items = [];
  static Priopity = { HIGHT: "hight", LOW: "low" };

  addNote(note) {
    this.#items.push(note);
  }

  removeNote(id) {
    this.#items = this.#items.filter((note) => note.id !== id);
  }

  updatePriority(id, newPriority) {
    this.#items.find((item) => item.id === id).priority = newPriority;
  }

  getNotes() {
    return this.#items;
  }
}

const myNotes = new Notes();

myNotes.addNote({
  id: 1,
  text: "123",
  priority: Notes.Priopity.HIGHT,
});
myNotes.addNote({
  id: 2,
  text: "321",
  priority: Notes.Priopity.LOW,
});

myNotes.updatePriority(1, Notes.Priopity.LOW);

myNotes.removeNote(2);

console.log(myNotes.getNotes());
// {id, text, priority
