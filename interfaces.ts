interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  //   myFunction:()=>string
  startTrial(): string;
  getCoupon(coupnName: string): number;
}
interface User {
  //reopening of interface
  githubId: string;
}
const manish: User = {
  dbId: 123,
  email: "jhamanish.cse25@gmail.com",
  userId: 56,
  startTrial: () => {
    return "12345";
  },
  getCoupon: (name: "Manish") => {
    return 10;
  },
  githubId: "manishjhacse",
};

interface Admin extends User {
  role: "admin" | "ta";
}
const manishjha: Admin = {
  dbId: 123,
  email: "jhamanish.cse25@gmail.com",
  userId: 5,
  startTrial: () => {
    return "12345";
  },
  getCoupon: (name: "Manish") => {
    return 10;
  },
  githubId: "manishjhacse",
  role: "admin",
};

export {};
