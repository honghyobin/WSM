// let naem="최유진";
// console.log(`안녕, ${name}`);

// -> URL에 있는 book parmeter 값(string) 
let url_hrdf=window.location.href; //브라우저 창에 있는 주소, String
const bookId=new URL(url_hrdf).searchParams.get("book");
console.log(`bookId: ${bookId}, type : ${typeof bookId}`);

// -> string을 Number로 변환 : bookIdNumber
    //let bookIdNumber=Number(bookId); //string -> number
    let bookIdNumber=parseInt(bookId); //string -> number
    //let bookIdNumber=bookId * 1; //string -> number
console.log(`bookIdNumber: ${bookId}, type: ${typeof bookIdNumber}`); //3,number
//bookId가 null이면, index.html로 가자
if(bookId == null){
    //window.open("index.html",target="_top");  //새로운 창이 생기는거 X
   window.location.href="index.html";
}

// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자 : bookData
// bookIdNumber : URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for(let book of books){
    if(bookIdNumber === book.id){
        bookData=book;     //id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}

// -> title, author, publisher, bookImage 알아내자
let title=bookData.title;
 //let title=bookData["title"];
let author=bookData.author;
let publisher=bookData.publisher;
let bookImage=bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자 
//HTML 요소 -> js 변수
const titleDiv=document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;
const authorDiv=document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;
const publisherDiv=document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;
const bookImageDiv=document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML= `<img src="${bookImage}" />`
const readDateDiv=document.getElementsByClassName("read-date")[1];
let now="2030년 8월 17일";
now=new Date(); //현재 날짜와 시각 객체
let year=now.getFullYear();
let month=now.getMonth();  //8월이 7로 나와. return 실제 월 -1
let date =now.getDate();
let day= now.getDay();
weeks=["일", "월", "화", "수", "목", "금", "토"];
day=weeks[day]+"요일";
now=`${year}년 ${month+1}월 ${date}일 ${day}`;

readDateDiv.innerHTML=now;




let u = window.location.href;
const url = new URL(u).searchParams;
const urlParams=parseInt(url.get('book'));
// let str=u;
// let num=str.substring(str.length-1,str.length);
// let num=u.substring(u.length-1,u.length);
// let a=Number(num-1);



const bookTitle=books[urlParams-1].title;

console.log(`bookTitle: ${bookTitle}`);