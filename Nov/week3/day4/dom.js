
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