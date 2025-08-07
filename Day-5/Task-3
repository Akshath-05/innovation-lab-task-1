// Object Destructuring
let student = {
  name: 'John Doe',
  age: 20,
  course: 'JavaScript'
};

// Extract properties from objects into variables
let { name, age } = student;
console.log(name); 
console.log(age); 

// Destructuring with default values
let { courseName = 'Default Course' } = { courseName: undefined };
console.log(courseName); // 

let { course: courseTitle = 'Default Course' } = student;
console.log(courseTitle); 

// Destructuring with nested objects
let nestedStudent = {
  name: 'Jane Doe',
  age: 22,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

let { address: { street, city } } = nestedStudent;
console.log(street); 
console.log(city);

// Spread Operator
let clonedStudent = { ...student };
console.log(clonedStudent); 

// Merge objects
let additionalInfo = {
  grade: 'A',
  attendance: 'Regular'
};

let mergedStudent = { ...student, ...additionalInfo };
console.log(mergedStudent);
