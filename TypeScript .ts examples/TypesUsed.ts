//Primitives

let age: number;
age = 12; // error if used a 'string'

let userName: string; 
 userName = 'Max';

 let isIntructor: boolean;
 isIntructor = true;

 // More complex types\\

 //Arrays
 let hobbies: strings[];// can also be booleans and numbers
hobbies = ['Sports', 'Cooking','School'];

// Also store name and objects
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max'
  age: 12
};

// Working with Union Types  \\

let course: string | number = 'React - The Complete Guide';

course = 1234;

// Assigning Type Aliases \\

type Person = {
  name: string;
  age: number;
};

// Functions & Types \\
function add(a: number, b: number){
  return a + b; //number is needed 
}

function print(value: any){
  console.log(value);// void so it never returns
}

// Generics \\

function insertAtBeginning <T> (array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1)// [ -1,1,2,3]

// ... ues the T anywhere the : type is defined.


// Classes \\

class Student {
  firstName: string;
  lastName: string;
  age: number;
  courses: string;

  constructor( first:string, last:string, age:number, courses:string[]){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string){
    this.courses.push(courseName);
  }
}

const student = new Student('Max', 'Smith', 32, ['Math', 'Reading']);

// Interfaces \\

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}
let max: Human;
max = {
  firstName:'Max',
  age: 32,
  greet {
    console.log('Hello!');
  },
};


