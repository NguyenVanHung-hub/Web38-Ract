// let email = "email@gmail.com";
// email = "nguyenvana@gmail.com";
// console.log(email);

// const sdt = "0337975238";

// console.log(sdt);




// arrow function

// const person ={
//     name : "Hung",
//     subName: "Nguyen Van",
//     fullName: function(){
//         console.log(this);
//         return this.subName +" "+ this.name;
//     }
// };
// console.log(person.fullName());

// const arowPerson ={
//     name : "Hung",
//     subName: "Nguyen Van",
//     fullName: () =>{
//         console.log(this);
//         return this.subName +" "+ this.name;
//     }
// };
// console.log(arowPerson.fullName());




//Destructuring voi array
// const arr_1 = [1,2,3,4,5];
// // console.log(arr_1[3]); 

// const arr_2 = [2,4,6,8];
// const[fis] = arr_2;
// console.log(fis);




// //Destructuring voi Object
// const person_2 = {
//     name: "A",
//     subName: "Nguyen Van",
//     age: 20
// }
// const{} = person_2;
// console.log(rest);

// let sum = (...value) =>{
//     console.log(value);
//     let total = 0;
//     value.forEach((item) =>{
//         total += item;
//     });
//     return total;
// }

// const arr_1 = [1,2,3];
// const arr_2 = [...arr_1, 4,5];
// console.log(arr_2);
// console.log(sum(...arr_2));





import { add, subtract } from "./match.js";
console.log(add(3, 5));
console.log(subtract(3, 5));