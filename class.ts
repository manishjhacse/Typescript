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
class User {
  protected courseCount: number = 1;
  constructor(
    public name: string,
    public city: string,
    private email: string
  ) {}
  get userEmail(): string {
    return this.email;
  }
  get courseEnrolled(): number {
    return this.courseCount;
  }
  set addCourse(courseCount: number) {
    //we can not set any return type in setter , not even void type
    if (courseCount <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this.courseCount = courseCount;
  }
}
const manish = new User("Manish", "Madhubani", "jhamanish.cse25@gmail.com");
console.log(manish.name);
console.log(manish.city);
// console.log(manish.email); can access as it is private
console.log(manish.userEmail);
console.log(manish.courseEnrolled);
manish.addCourse = 3;
console.log(manish.courseEnrolled);

class subUser extends User {
  changeCourseCount(count: number) {
    this.courseCount = count;
  }
}
const jha = new subUser("Manish", "Madhubani", "jhamanish.cse25@gmail.com");
console.log(jha.courseEnrolled);
jha.changeCourseCount(10);
console.log(jha.courseEnrolled);
