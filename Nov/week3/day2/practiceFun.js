console.log("Practice Question on Array Function");
// let a=10; single line function

/*let b=20;
let c=30;*/ // multi line function

// FOREACH FUNCTION
//Q1. print each element of array
let nums=[10,20,30,40];
nums.forEach(v=>{
    console.log(v);
})

// Q2. print index and element of array
nums.forEach((v,i)=>{
    console.log(i+v);
})

//Q4. Count How Many elements in an array are even using Only forEach function
let numArr=[1,2,3,4,5,6,7,8,9,10];
let count=0;
numArr.forEach((v)=>{
    if(v%2==0){
        count++;
    }
})
console.log(count);

// Q5. Given ["apple","banana","mango"] , print each fruit in uppercase using forEach function.
let fruits=["apple","banana","mango"];
fruits.forEach((v)=>{
    console.log(v.toUpperCase());
})


// Q6. Add all elements of an array using forEach function.
let sum=0;
numArr.forEach((v)=>{
    sum+=v;
})
console.log(sum);

//Q7. Create a new array that contains only the lengths of each string using forEach function.
let storeLen=[];
fruits.forEach((v)=>{
    storeLen.push(v.length);
})
console.log(storeLen);

//Q8. Using forEach function, check how many times each item occurs.
// ["a","b","a","c","b","a"]
let charArr=["a","b","a","c","b","a"];
let obj={};
charArr.forEach((v)=>{
    if(obj[v]){
        obj[v]=obj[v]+1;
    }else{
        obj[v]=1;
    }
})
console.log(obj);

// Q9. Using ForEach, create an object where key =number , value = square of number.
let sqObj={};
numArr.forEach((v)=>{
    sqObj[v]=v*v;
})
console.log(sqObj);

// MAP FUNCTION

// Q1. Given [1,2,3,4] , return [2,4,6,8].
let nArr=[1,2,3,4];

let updateArr=nArr.map((v)=>{
    return v*2;
})
console.log(updateArr);

// Q2. convert all strings to uppercase in ["red","green","blue"].
let uppercaseValue=fruits.map(v=>{
    return v.toUpperCase();
})
console.log(uppercaseValue);

// Q3. From [10,20,30] return each element + its index.
let upArr= [10,20,30].map((v,i)=> v+i);
console.log(upArr);


// Q4. Array of objects 
// [{name:"Alice",age:25},{name:"Bob",age:30}] ,
// return array of names.

let objArr=[{name:"Alice",age:25},{name:"Bob",age:30}];

let namesArr=objArr.map(v=> v.name);
console.log(namesArr);

// FILTER FUNCTION

//Q1. filter out even numbers from [1,2,3,4,5,6].
let evenArr=[1,2,3,4,5,6].filter((v)=>{
    return v%2==0;
})
console.log(evenArr);

// Q2. Given [0,1, false , true , "", "hello"] , filter out truthy values.
let trueArr=[0,1, false , true , "", "hello"].filter((v)=>{
    // if (v!== 0 || v!== "" || v!== false || v!== null || v!== undefined){
    //     return v;
    // }

    return Boolean(v);
})
console.log(trueArr);

// Q3. Filter out duplicatec numbers using filter + indexOf.





// Q4.Count the total characters in an array of strings
// ["hi", "hello", "bye"] => 10

let charCount=["hi", "hello", "bye"].reduce((count,curr)=>{
    return count+curr.length;
},0);
console.log(charCount);