console.log("Hello World");
const myName="Tahsin Moon";
const h1=document.querySelector(".heading-primary");
console.log("myName");
console.log("h1");
 
// 

const btnNavEl=document.querySelector(".btn-mobile-nav");
 const headerEl=document.querySelector(".header");

 btnNavEl.addEventListener('click' , function myFunction(){
    headerEl.classList.toggle(".nav-open");
 })

