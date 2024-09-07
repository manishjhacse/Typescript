"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Manish Jha",
    email: "jhamanish.cse25@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, _b = _a.isPaid, boolean = _b === void 0 ? false : _b;
}
createUser({ name: "Manish" });
createUser({ name: "Manish", isPaid: true });
var newUser = { name: "Manish", isPaid: true, age: 21 };
// createUser({name:"Manish",isPaid:true,age:21}) giving error
createUser(newUser);
function createCourse(name, price) {
    return { name: name, price: price };
}
createCourse("reactjs", 5000);
console.log(createCourse("Mern", 7000));
