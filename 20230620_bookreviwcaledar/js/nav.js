const navToggleI=nav_toggle.getElementsByTagName("i")[0];
const navListUl=document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);

//.nav-toggle 클릭하면
nav_toggle.onclick = () => {
    //.nav-toggle i 햄버거메뉴 <-> 
    //class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    navListUl.classList.toggle("show-menu");


}
//.nav-list .show-menu toggle
navListUl.classList.toggle("show-menu");



//HTML -> js
//1. id로 가져오기
   // const navToggleDiv = document.getElementById("nav-toggle"); //id로 가져오기
    //nav-toggle
//2. class로 가져오기
    //const navToggleDiv=document.getElementsByClassName("nav-toggle")[0];//0은 인덱스값
//3. Tag로 가져오기
    //const navToggleDiv=document.getElementsByTagName("div")[0];//0은 인덱스 
//4. CSS selector로 가져오기
    // const navToggleDiv=document.querySelector("#nav-toggle");//id
    // const navToggleDiv=document.querySelectorAll(".nav-toggle")[0];//class
    // const navToggleDiv=document.querySelectorAll("div")[0];//tag
//5. XPath

/////////////////////////////////////////////////////////////////////////////////////////

// nav_toggle.onclick=()=>alert("안녕");
// nav_toggle.onclick=()=>alert("안녕");

//안녕이라는 창을 띄우는 함수를 실행해라
// function sayHello(){
//     alert("안녕");
// }
//nav_toggle.conclick=sayHello;

// nav_toggle.onclick=function(){
//     alert("안녕");
// };

// nav_toggle.onclick=()=>{
//     alert("안녕");
// };

// nav_toggle.onclick = () => alert("안녕");