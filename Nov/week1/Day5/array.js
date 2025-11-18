console.log("Today we are going to learn Arrays Methods");

let arr=[1,2,3,4,5];
console.log(arr);

let arrObj= new Array(6,7,8,9);
console.log(arrObj);

console.log(Array(3).fill("js"));

console.log(Array.of(1,2,3,4,5,6,7,8));

console.log(Array.from("aunsncnas"));


// MAnipulation Methods
arr.push(6);
console.log(arr);
arr.push(7,8,9, "hello",true);
console.log(arr);

arr.unshift(0,"bye");
console.log(arr);

for(let i=0;i<3;i++){
    arr.pop();
}
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(7));

console.log(arr.at(0));

console.log(arr[1]);
console.log(arr.indexOf(5)); 
let num=12345;
console.log(Array.isArray(num));

// console.log(arr.reverse());
// console.log(arr.toReversed());  // for not original array

let numArr=[3,5,1,0];
// console.log(numArr.sort()); // changes original array
// console.log(numArr)

console.log(numArr.toSorted()); // does not change original array
console.log(numArr);

//slice method
console.log(arr);

console.log(arr.slice(1,5));
// splice method
arr.splice(0,2,"a","b","c");
console.log(arr);
// first value change,second value delete, rest add values

// join method
console.log(arr.join("-"));

// toString method
console.log(arr.toString());

console.log([[1,2],[3,4],[5,6]].flat());





