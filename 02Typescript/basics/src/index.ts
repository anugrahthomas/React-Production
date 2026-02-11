type User = {
  // type are more complex, union, primitive, tuples
  // type alias
  name: string;
  readonly email: string; //can't change
  age?: number;
};
const user: User = {
  name: "Tony Stark",
  email: "tony@email.com",
  age: 34,
};

type Status = "ordered" | "shiped" | "delivered";

interface Person {
  // preferable for objects, extendable, mergeable
  name: string;
  age?: number;
}

// interface for function
interface Func {
  (x: number, y: number): number;
}

const add: Func = (a, b) => a + b;

function double(a: number): number {
  return a * 2;
}
// void type
function hello(name: string): void {
  console.log(`Hello ${name}`);
}

const arr: number[] = [1, 2, 4, 5];
const arr1: Array<number> = [1, 2, 4, 5];
const arr2: [number, string] = [32, "asdf"];

// literal types
const a: 1 | 2 | 3 = 3;

// enumeration
enum E {
  a, //0
  b, //1
  c, //2
  d = "delta", //delta
}

class Car {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getModel(): string {
    return this.type;
  }
}

const car: Car = new Car("BMW", "SUV");

interface Iclass {
  getName(): string;
  setName(name: string): void;
}

class Student implements Iclass {
  private name: string = "";
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

const s1: Student = new Student();
s1.setName("bob marly");
s1.getName();

// Generics
function sameReturn<T>(x: T): T {
  return x;
}
const r1 = sameReturn<number>(32);
const r2 = sameReturn<string>("string");

