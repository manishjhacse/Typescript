"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this create a new data type user
function createUser(user) {
    return user;
}
// createUser() error as we are not passing any argument of type User
var newUser = createUser({
    _id: "fhskjnsl",
    name: "Manish",
    age: 21,
    gender: "Male",
});
newUser.name = "Manish jha";
