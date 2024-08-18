function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(5, 7));
// console.log(add("manish",2)) will give error

const login = (name: string, email: string, isAdmin: boolean = false) => {
  console.log(name, email, isAdmin);
};
login("manish", "jhamanish.cse25@gmail.com", true);
login("manish", "jhamanish.cse25@gmail.com");
function addTwo(val: number) {
  // return val+2;
  return "not number";
}

//return type in function
function canDrive(age: number): boolean {
  if (age < 18) {
    // return "" will give error as we have to return boolean value
    return false;
  } else {
    return true;
  }
}
console.log(canDrive(21));

//map

const heros = ["Ironman", "Spideman", "Captain America", "Thor"];

heros.map((hero): string => `${hero} is fighting with the monster`);

function consoleError(err:string):void{
    console.log(err)
}

function handleError(err:string):never{
    throw new Error(err)
}

export {};
