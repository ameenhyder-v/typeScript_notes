// ! Critical: Fix this ASAP
// ? What does this function do?

// * Highlight this important section
// TD: Refactor this block of code
// Nt: This part works but could be optimized


//!infer types

//Nt let userName:string = "debug "
// Nt let h:number=89
//Nt userName=1




//! explicit types

// Nt let userName:string ="debug"
// Nt let subscribers: number =30000
// Nt let skills: string[]=["sdas","js", "css"]
// Nt let emptyArray:[]=[]
// Nt let details:{name:string;age: number}={
// Nt    name : "hello",
// Nt    age:29
// Nt}





//! ANY
//nt let dynamic: any = "Hello";
// nt dynamic = 42; // No error
// nt dynamic = true; // No error

//!UNKNOWN
// nt let value: unknown = "TypeScript";

// nt if (typeof value === "string") {
// nt console.log(value.toUpperCase()); // Safe usage
// nt }

//!Void
// function logMessage(message: string): void {
//   console.log(message);
// }


//!Never

// function throwError(message: string): never {
//   throw new Error(message);
// }

//!Array
// let numbers: number[] = [1, 2, 3];
// let strings: Array<string> = ["a", "b", "c"];

//!Tuple
// let tuple: [string, number] = ["hello", 42];

//!Enum
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// console.log(Direction.Up); // Output: 0


//!Object
// let obj: object = { name: "John", age: 25 };


//!UNION
// let value: string | number;
// value = "hello";
// value = 42;


//!Intersection Types
// type Person = { name: string };
// type Employee = { employeeId: number };
// type EmployeeDetails = Person & Employee;

// let details: EmployeeDetails = { name: "John", employeeId: 123 };


//!Literal Types

// let direction: "up" | "down";
// direction = "up"; // Valid
// // direction = "left"; // Error


//!Generics

// function genericss<T>(name:T):T{
// return name;
// }


// let result = genericss(123);  // T inferred as number
// let result2 = genericss("hello");

















//! interface
//* Inheritance is a mechanism where one class acquires the properties and methods of another class.
//*  The class being inherited from is called the superclass or parent class,
// * and the class doing the inheriting is called the subclass or child class.


//* In TypeScript, an interface is a way to define the shape or structure of an object,
// *including its properties, methods, and their types.
// *It serves as a contract for classes, objects, or functions, ensuring they adhere to a specific structure.

// interface Details {
//     name: string;
//     age: number;
//     salary : number
// }

// let userDetails: Details= {
//     name:"sooryadev",
//     age: 19,
//     salary :40000
// }

//! optional properties in interface
// interface User {
//     id: number;
//     name: string;
//     isAdmin?: boolean; // optional property
//   }

//   const user: User = {
//id: 2,
//     name: "Bob",
//   };


//! Extending Interfaces

// interface Animal {
//   species: string;
//   sound(): void;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const myDog: Dog = {
//   species: "Canine",
//   breed: "Labrador",
//   sound: () => console.log("Woof!"),
// };


//!Interface for Function Types
// interface Greet {
//   (name: string): string;
// }

// const sayHello: Greet = (name) => `Hello, ${name}!`;

// console.log(sayHello("Alice")); // Output: Hello, Alice!



//nt typeAlias

// *A type alias allows you to create a custom name for any type, including primitive, object, or union types. It's more versatile than interfaces.

type Details={
    name: string;
        age: number;
        salary : number
}

let userDetails: Details= {
        name:"sooryadev",
        age: 19,
        salary :40000
    }


//!*Utility types

//!Read-Only

// type Users={
//   readonly name: string;
//   age:number;
// }
// const userDetails:Users ={
//   name:"sooryadev",
//   age:12,
// }
// //userDetails.name="fjkskj"
//Cannot assign to 'name' because it is a read-only property



//!Partial


// type Users={
//   readonly name: string;
//   age:number;
// }
// const userDetails:Partial<Users >={
//   name:"sooryadev",
//   age:12,
// }

// partial utility type to make values optional



//!Required

// type Users={
//   readonly name: string;
//   age:number;
// }
// const userDetails:Required <Users >={
//   name:"sooryadev",

// }

// to make values required
// Property 'age' is missing in type '{ name: string; }' but required in type 'Required<Users


//!Pick
// type Users={
//   name: string;
//   age:number;
// }
// const userDetails:Pick <Users ,"name">={
//   name:"sooryadev",

// }

// used to pick specified values

//!Omit

// type Users={
//   name: string;
//   age:number;
// }
// const userDetails:Omit <Users ,"name">={
//   // name:"sooryadev",
//   age:20
// }

// omit to exclude specific values


//!Union and Intersection Types

// type ID = number | string;

// let userId: ID = 101;
// userId = "abc123"; // valid



// type Person = { name: string };
// type Employee = { employeeId: number };
// type Staff = Person & Employee;

// const staff: Staff = { name: "Grace", employeeId: 102 };


//!Decorates

// function Log(target: any, context: ClassMemberDecoratorContext {
//     console.log(`Method ${String(context.name)} is decorated.`);
// }

// class Example {
//     @Log
//     sayHello() {
//         console.log("Hello, world!");
//     }
// }

// // Logs: "Method sayHello is decorated."


//*OOP



// //! 1. **Encapsulation**: Hiding the details (name is private, accessed via public methods)
// class Animal {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;  //! Encapsulating the 'name' property
//     }

//     getName() {
//         return this.name;  // !Public method to get the private 'name'
//     }
// }

// //! 2. **Abstraction**: Hiding complex details (we just define the method signature, no implementation)
// abstract class Person {
//     abstract speak(): void;  // !Abstract method, no implementation here
// }

// //! 3. **Inheritance**: 'Employee' class inherits from 'Person'
// class Employee extends Person {
//     speak() {
//         console.log("Hello, I am an employee.");
//     }
// }

// // !4. **Polymorphism**: Different classes (Employee, Animal) can have different implementations of 'speak'
// class AnimalPerson extends Person {
//     speak() {
//         console.log("I am an animal person!");
//     }
// }

// //! Testing the example
// const dog = new Animal("Dog");
// console.log(dog.getName());  //! Accessing name using public method (Encapsulation)

// const employee = new Employee();
// employee.speak();  // !Output: "Hello, I am an employee." (Inheritance + Polymorphism)

// const animalPerson = new AnimalPerson();
// animalPerson.speak();  //! Output: "I am an animal person!" (Polymorphism)




//!Function Overloading for Area Calculation


// function area(side: number): number; // Square
// function area(length: number, width: number): number; // Rectangle
// function area(a: number, b?: number): number {
//     if (b === undefined) {
//         return a * a; // Square area
//     }
//     return a * b; // Rectangle area
// }

// console.log(area(4)); // Output: 16 (Square)
// console.log(area(5, 3)); // Output: 15 (ectangle)