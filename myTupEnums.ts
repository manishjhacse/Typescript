let arr: [string, number, boolean];
// arr=[1,2,3]
arr = ["1", 5, true];

let rgb: [number, number, number];
rgb = [201, 201, 201];

type User1 = [number, string];

const newUser: User1 = [12, "fds"];

newUser.push(10); //push,pull ..... these methods not follow tuple rules
console.log(newUser);

//enums
enum seatChoice {
  AISLE,
  Middle,
  WINDOW,
}
const mySeat = seatChoice.WINDOW;

const enum seatChoices {
  AISLE = "asile",
  Middle = 5,
  WINDOW,
}
const mySeat1 = seatChoices.AISLE;
export {};
