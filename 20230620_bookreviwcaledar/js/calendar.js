// 이번달
//현재날짜, 시각 객체 만들자
var now=new Date();

//현재 년
var year=now.getFullYear();

//현재 월
var month=now.getMonth()+1;

const datesContainerDiv=document.querySelectorAll(".dates.container")[0]
const setCalendar=(year, month) => {

    //제목 달 보여주기
    //html -> js
    const titleMonthDiv=document.getElementsByClassName('month')[0];
    //.innerHTML = `&{month}월`;
    titleMonthDiv.innerHTML=` ${year}년 ${month}월`;

    //달력 만들자
    //해당 월의 1일이 무슨 요일
    var firstDateDay=new Date(year, month-1,1).getDay();
    //해당 월의 마지막 날짜가 며칠? - 다음달의 1일 하루 전날(0)
    var lastDate=new Date(year, month -1 + 1, 0).getDate();
    //console.log(firstDateDay); //5
   // console.log(lastDate); //30

   //원래 있던 달력의 .date.item clear
   datesContainerDiv.replaceChildren();

   //.date.item{$}*lastDate
   //for 1~lastDate
    for(let date=1; date<=lastDate; date++){
        // console.log(date);
        let dateItemDiv=document.createElement("div")//<div></div>
        dateItemDiv.classList.add("date"); //<div class="date"><div>
        dateItemDiv.classList.add("item"); //<div class="item"><div>
        dateItemDiv.innerHTML=date;
        console.log(dateItemDiv);
        //HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

   //1일을 firstDateDay로 옮기자 5->6
   //.dates.container의 자식중 첫째자식(1일) style grid-column-start: day+1
   let firstDateDiv=datesContainerDiv.firstElementChild;
   //CSS {grid-column-start: firstDatedDay+1;}
   firstDateDiv.style.gridColumnStart=firstDateDay+1;

   //토요일 파랑
   let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${7-firstDateDay})`);
   for (let dateItem of saturdayDivs){
       dateItem.style.color="blue";
   }
   
   //일요일 빨강
   let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${(7-firstDateDay+1)%7})`);
   for(let dateItem of sundayDivs){
       dateItem.style.color="red";
   }

}



setCalendar(year,month);

//현재 일
// var date=now.getDate();
// console.log(now, year, month,date);


// < : 이전 달
//html->js
const leftDiv=document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    // console.log(`${month}월`);
    
    if(month==0){
        year--
        month=12;
    }//이게 아래 5줄 내용임
    // year=thisMonthDateObject.getFullYear();
    // month=thisMonthDateObject.getMonth()+1;
    // let thisMonthDateObject=new Date(year, month-1);
    // year=thisMonthDateObject.getFullYear();
    // month=thisMonthDateObject.getMonth()+1;
    setCalendar(year,month)
}
//leftDiv.addEventListener("click", () => console.log(`${month}월`));

//년 달 누르면 원래 달로 이동
const thisMonthDiv=document.getElementsByClassName("month")[0];
thisMonthDiv.onclick = () =>{
    now=new Date();
    year=now.getFullYear();
    month=now.getMonth()+1;
    setCalendar(year,month);
}



// > : 지난 달
const rightDiv=document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    // console.log(`${month}월`);
    if(month==13){
        year++
        month=1;
    }
    setCalendar(year,month)
}