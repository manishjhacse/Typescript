type User = {
  readonly _id: string;
  name: string;
  age: number;
  gender: string;
};
//this create a new data type user

function createUser(user: User): User {
  return user;
}
// createUser() error as we are not passing any argument of type User
let newUser: User = createUser({
  _id: "fhskjnsl",
  name: "Manish",
  age: 21,
  gender: "Male",
});
newUser.name = "Manish jha";
// newUser._id="hkjhg" give error as id is of readonly type

type cardNuber = {
  cardNumber: string;
};
type cardExiparyDate = {
  expiryDate: string;
};

type cardDetails = cardNuber &
  cardExiparyDate & {
    cvv: number;
  };

export {};
