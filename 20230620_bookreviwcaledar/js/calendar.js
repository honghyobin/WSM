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
    titleMonthDiv.innerHTML=`${month}월`;

    //달력 만들자
    //해당 월의 1일이 무슨 요일
    var firstDateDay=new Date(year, month-1,1).getDay();
    //해당 월의 마지막 날짜가 며칠? - 다음달의 1일 하루 전날(0)
    var lastDate=new Date(year, month -1 + 1, 0).getDate();
    //console.log(firstDateDay); //5
   // console.log(lastDate); //30

   //.date.item{$}*lastDate
   //<div class="date item">date</div>
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

}

setCalendar(year,month);

//현재 일
// var date=now.getDate();
// console.log(now, year, month,date);




// < : 이전 달
// > : 지난 달

