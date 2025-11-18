console.log("Today we are going to learn String method");
let str="Hello";
console.log(str[0]);
// MEthods of String
// 1.At
console.log(str.at(0));
// 2. charAt
console.log(str.charAt(1));

// String Interpolation
let animal="Dog";
console.log(`My favorite animal is ${animal}`);

// concat
console.log("Hello Hye "+30);
console.log("Hello Hye ".concat("Bye"));


// trim 
let str1="Qlith   ";
console.log(str1.length);
console.log(str1.trim().length);

let str1a="   Ql ith   ";
console.log(str1a.length);
console.log(str1a.trim().length);


// trimStart
let str2="   Qlith";
console.log(str2.length);
console.log(str2.trimStart().length);

// trimEnd
let str3="Qlith   ";
console.log(str3.length);
console.log(str3.trimEnd().length);

// Replace Method
console.log(str1.replace("l","L"));
console.log(str1);

// description
let desc="this is my cat .his name is tomcat. it has two baby cat";
console.log(desc.replaceAll("cat","dog"));

// toString
let num=123;
console.log(num);
console.log(num.toString());

// Slice Method
let string="This is Qlith Office";
console.log(string.slice(2,6));        
// start index included , end index excluded
console.log(string.slice(4,2));
// if start index is greater than end index then it will return empty string
console.log(string.slice(2));          
// if end index is not given then it will go till end of string
console.log(string.slice(-6));
// if negative index is given then it will start from end of string

let strArr=string.split("");
console.log(strArr);
// split method converts string to array based on given separator
let strArr1=string.split(" ");
console.log(strArr1);
// split by space

