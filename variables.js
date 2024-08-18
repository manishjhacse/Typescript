"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hi, How are you?";
var numString = "5";
var numNumber = 5;
// numNumber.toLowerCase();
numString.toLowerCase();
message.toLowerCase();
console.log(message);
console.log(numNumber + numString);
//number
var rollNo = 21418;
var mark = 99.23;
console.log(typeof (mark));
//boolean
var pass = true;
//any
var heroAny;
var heroString;
function getHero() {
    return "IronMan";
}
function getHeroNumber() {
    return 56;
}
heroAny = getHero();
heroString = getHero();
heroAny = getHeroNumber();
