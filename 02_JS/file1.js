//Array in javascript
//refernce type objects
//arrays are mutable
let array1= ["mahesh","suresh","somesh","rajesh",1,9,8,76,987];
// length of the array
console.log(array1.length);
//element of an array
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
//updation  in the element of javascript
array1[0]="aman";
console.log(array1);

// methods of an arrays
//push()
array1.push("mohan");//adding a new element in the array in the last
//pop()
console.log(array1.pop());// removing an element of an array from the last
//shift()
console.log(array1.shift());//removing and return the element of the array from the starting
console.log(array1);
//unshift()
console.log(array1.unshift("manoj"));// adding an element in the starting of the array
//slice()
console.log(array1.slice(1,3));//basically it returns a subpart of the array and the last argument is getting neglected
//splice()
console.log(array1.splice(1,3,4));