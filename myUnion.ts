let score: number | string;
score = 95;
score = "A+";
type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};
let manish: User | Admin = { name: "Manish jha", id: 21418 };
manish = { userName: "manish_j21", id: 21418 };

function getId(id: number | string) {
  console.log(`the id is ${id}`);
}
getId(5);
getId("fds56");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id = id.toUpperCase();
  }
  console.log(`the id is ${id}`);
}
getDbId(546);
getDbId("FDSsfsssf");

let data: number[] | string[] = [1, 2, 3];
data = ["1", "2"];
const data2: (number | string | boolean)[] = [1, "2", true];

let pi: 3.14 = 3.14;
// pi=3.15 now pi can not change form 3.14

let seatAllotment: "aisle" | "window" | "middle";
seatAllotment = "aisle";
// seatAllotment="crew" give error
export {};
