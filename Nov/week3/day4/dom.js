
// getElementById
let h1=document.getElementById("heading");
console.log(h1);

// getElementsByClassName
let boxArr=document.getElementsByClassName("box");
console.log(boxArr[0] .innertext);
console.log(boxArr[0] .innerHTML);

boxArr[0] .innerText="This is Box 1";
console.log(boxArr[0] );


boxArr[1] .innerHTML="<h2>This is Box 2</h2>";
console.log(boxArr[1] );

// getElementsByTagName
let pArr=document.getElementsByTagName("p");
console.log(pArr);


// Task- Html collection aur node list me kya difference hai?
// Ans- Html collection me live hota hai mtlb agar hum html me kuch add ya delete karte hai to wo html collection me reflect hota hai
// lekin node list me live nahi hota hai.