var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//   name: string;
//   city: string;
//   private email: string;
//   constructor(name: string, city: string,email:string) {
//     this.name = name;
//     this.city = city;
//     this.email = email;
//   }
// }
var User = /** @class */ (function () {
    function User(name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
        this.courseCount = 1;
    }
    Object.defineProperty(User.prototype, "userEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseEnrolled", {
        get: function () {
            return this.courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "addCourse", {
        set: function (courseCount) {
            //we can not set any return type in setter , not even void type
            if (courseCount <= 1) {
                throw new Error("Course count should be greater than 1");
            }
            this.courseCount = courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var manish = new User("Manish", "Madhubani", "jhamanish.cse25@gmail.com");
console.log(manish.name);
console.log(manish.city);
// console.log(manish.email); can access as it is private
console.log(manish.userEmail);
console.log(manish.courseEnrolled);
manish.addCourse = 3;
console.log(manish.courseEnrolled);
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subUser.prototype.changeCourseCount = function (count) {
        this.courseCount = count;
    };
    return subUser;
}(User));
var jha = new subUser("Manish", "Madhubani", "jhamanish.cse25@gmail.com");
console.log(jha.courseEnrolled);
jha.changeCourseCount(10);
console.log(jha.courseEnrolled);
