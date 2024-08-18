"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 7));
// console.log(add("manish",2)) will give error
var login = function (name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    console.log(name, email, isAdmin);
};
login("manish", "jhamanish.cse25@gmail.com", true);
login("manish", "jhamanish.cse25@gmail.com");
function addTwo(val) {
    // return val+2;
    return "not number";
}
//return type in function
function canDrive(age) {
    if (age < 18) {
        // return "" will give error as we have to return boolean value
        return false;
    }
    else {
        return true;
    }
}
console.log(canDrive(21));
//map
var heros = ["Ironman", "Spideman", "Captain America", "Thor"];
heros.map(function (hero) { return "".concat(hero, " is fighting with the monster"); });
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    throw new Error(err);
}
