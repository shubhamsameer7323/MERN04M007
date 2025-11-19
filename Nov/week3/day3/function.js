console.log("Today some special methods");
// EVERY METHOD
let arr=[1,2,3,4,5];
let isGreater=arr.every((v)=>{
    return v>0;
})
console.log(isGreater); // true

// SOME METHOD
let isgre=arr.some((v)=>{
    return v>0
})
console.log(isgre); // true

// find METHOD
let value=arr.find((v)=>{
    return v===2;
})
console.log(value); // 2

// findLast METHOD
let Lastvalue=arr.findLast((v,i)=>{
    console.log("idex",i);
    return v===2;
})
console.log(Lastvalue); // 2

// findIndex METHOD
let findindex=arr.findIndex((v)=>{
    return v===2;
})
console.log(findindex); // 1


// Q1. check if all numbers are even:
let nums = [2,4,6,8];
let isEven=nums.every(v=> v%2===0);
console.log(isEven); // true

// Q2. check if all strings have length greater than 3:
// ["apple", "banana", "kiwi"]

let fruits = ["apple", "banana", "kiwi"];
console.log(fruits.every(v=>v.length>3)); // TRue

// Q3. check if all users are active: active= true
let users = [
    {name:"A" , active:true},
    {name:"B" , active:true},
    {name:"C" , active:false}
];
console.log(users.every(v=>v.active===true)); // false

// Q4. check if all elements in an array are unique using only every().
// let elements = [1,2,3,4,5,1];




// Some METHOD
// Q1. check if any product is out of stock: stock=0
let products = [
    {name:"pen" , qty:10},
    {name:"pencil" , qty:0},
    {name:"eraser" , qty:5}
];
console.log(products.some(v=>v.qty===0)); // true


// Q2. Find the first user with admin = true
let listOfuser= [
    {name:"X" , admin:false},
    {name:"Y" , admin:true},
    {name:"Z" , admin:false}
];
console.log(listOfuser,find(v => v.admin ===true));


let numbersArr=[1,2,5,3,9,6];
console.log(numbersArr.sort((a, b) => b - a));

// MAth Object
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


// Functions // methods

console.log(Math.max(1,2,4,50));
console.log(Math.min(1,2,4,50));
console.log(Math.round(4.6));
console.log(Math.floor(4.9)); 
console.log(Math.ceil(4.1));
console.log(Math.random());
console.log(Math.pow(4,9));
console.log(Math.sqrt(64));
console.log(Math.cbrt(27));
console.log(Math.abs(2.3));



let obj={
    name:"Qlith",
    age:20,
    phone:1234567890
}

delete obj.phone
console.log(obj);

Object.freeze(obj);
obj.age=25;
console.log(obj);
// next topic Object methods

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Object.fromEntries([[1,2], [2,4], [3,9]]));


// Q1.
let x={
    a:1
}
let y={
    b:2
}
// console.log(Object.assign(x,y));
// console.log(x);



