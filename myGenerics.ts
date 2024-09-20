const score: Array<number> = [];
const name1: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val; //either boolean or number
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}
function identityFive<X>(val: X): X {
  return val;
}

identityThree(3);
identityFour(4);

interface Bottle {
  brand: string;
  type: number;
}

function identitySix<Bottle>(val: Bottle): Bottle {
  return val;
}

function getSearchProduct<T>(products: T[]): T {
  //operation to find the product index
  const index = 5;
  return products[index];
}

const getSearchProduct1 = <T>(products: T[]): T => {
  const index = 5;
  return products[index];
};

interface Database {
  connection: string;
  name: string;
  userName: string;
}

function genericsExtens<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
genericsExtens(5, {
  connection: "fsajfsk",
  name: "Manish",
  userName: "manishjhs",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  type: string;
  tutor: string;
  price: number;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
