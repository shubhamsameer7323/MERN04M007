console.log("today we are going to learn DOM object");

// querySelector(Class Selector, ID Selector, Tag Selector);
let h1=document.querySelector("#head");
console.log(h1);

let divFirst=document.querySelector(".box");
console.log(divFirst);

let Firstp=document.querySelector("p");
console.log(Firstp);

// querySelectorAll(Class Selector, ID Selector, Tag Selector);
let classes=document.querySelectorAll(".box");
console.log(classes);
// if we want to select second-third class then use index after classes[].

// class list
let classList=divFirst.classList;
console.log(classList);

// textContent
let textContent=divFirst.textContent;
console.log(textContent);

// In textContent, even if the element is hidden, it will return the text content.
// But in innerText, if the element is hidden, it will not return the text content.

// innerText
let innerText=divFirst.innerText;
console.log(innerText);

// getAttribute & setAttribute
console.log(divFirst.textContent);
divFirst.setAttribute("id" , "headingId");
console.log(divFirst);
console.log(divFirst.getAttribute("class"));
