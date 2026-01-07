// Function:-
// console.log("We are going to clear the doubt");

// Array Special Methods:-
// let arr = [1,2,3,4];

// // for V:-
// for(let v of arr){
//     console.log(v);
// }

// // for Each:-
// arr.forEach((val,i)=>{
//     console.log(val,i);
// }) ;
// // Val is value and i is index

// // Map:-
// // it is used for updating the array elements and returns a new array.
// let newArr = arr.map((v,i)=>{
//     return v+2;
// });
// console.log(newArr); // [ 3, 4, 5, 6 ]
// console.log(arr);    // [ 1, 2, 3, 4 ]

// // Filter:-
// // It is used for filtering the array elements based on some condition and returns a new array.
// let evenArr = arr.filter((v)=>{
//     return v%2===0;
// });
// console.log(evenArr);

// // Reduce:-
// // It is used for reducing the array elements to a single value.
// let sum = arr.reduce((accu,c)=>{
//     return accu+c;
// },0);
// console.log(sum); // 10

// // some method:-
// let isEven = arr.some((v)=>{
//     return v%2===0;
// });
// console.log(isEven); // true

// // every method:-
// let allEven = arr.every((v)=>{
//     return v%2===0;
// });
// console.log(allEven); // false

// End of Array Special Methods:-



// DOM:-
// Id NAme:-
// let button = document.getElementById("btn");
// console.log(btn);

// // Class Name:-
// let p = document.getElementsByClassName("para");
// console.log(p);

// // Tag Name:-
// let paras = document.getElementsByTagName("p");
// console.log(paras);

// Query Selector:-
// let button = document.querySelector("#btn");
// console.log(button);

// let p = document.querySelector(".para");
// console.log(p); // only first p tag

// Html And node difference:-
// html is live and node is static.


// Event:-
// let btn = document.getElementById("btn");
// console.log(btn);
// Click Event
// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
// });
// btn is TargetElement, addEventListener("click",()=>{}) is EventListener,and rest is EventHandler.

// Double Click Event:-
// btn.addEventListener("dblclick",()=>{
//     console.log("Btn db Clicked");
// });

// mouse Down Event:-
// btn.addEventListener("mousedown",()=>{
//     console.log("Mouse Down Event");
// });

// mouse Up Event:-
// btn.addEventListener("mouseup",()=>{
//     console.log("Mouse Up Event");
// });

// mouse enter Event:-
// btn.addEventListener("mouseenter",()=>{
//     console.log("Mouse Enter Event");
// });

// mouse leave Event:-
// btn.addEventListener("mouseleave",()=>{
//     console.log("Mouse Leave Event");
// });

// mouse move Event:-
// btn.addEventListener("mousemove",()=>{
//     console.log("Mouse Move Event");
// });

// Key down Event:-
// document.addEventListener("keydown",()=>{
//     console.log("Key Down ");
// });

// Key up Event:-
// document.addEventListener("keyup",()=>{
//     console.log("Key Up ");
// });

// Key press Event:-
// document.addEventListener("keypress",()=>{
//     console.log("Key Press ");
// });



