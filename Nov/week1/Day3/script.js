// Q12. Convert a string like "hello world" to "Hello World".
let str="hello world";
let words=str.split(" ");
console.log(str.toUpperCase());



// Q15. convert a string "hello" into "h-e-l-l-o".
let str2="hello";
let hyphenated=str2.split("").join("-");
console.log(hyphenated);



// Q13. Count the number of words in a string.
let str3="Count the number of words in this string";
let wordcount=str3.split(" ").length;
console.log(wordcount);

// 10. Replace all occurrences of "Java" with "Python" in "I love Java Java ".
let str4="I love Java Java ";
console.log(str4.replaceAll("Java","Python"));

// Q14. Check if a string starts with "Hello" and ends with "World".
let str5="Hello everyone, welcome to the World";
let startsWithHello=str5.startsWith("Hello");
let endsWithWorld=str5.endsWith("World");
console.log(` ${startsWithHello},  ${endsWithWorld}`);


