var counterSec=0,counterMin=0,counterHour=0;
setInterval(()=>{
    counterSec+=1;
    if(counterSec>59)
    {
        counterSec=0;
        counterMin+=1;
    }
    if(counterMin>59)
    {
        counterMin=0;
        counterHour+=1;
    }
    let sch=String(counterHour);
    let scm=String(counterMin);
    let scs=String(counterSec);
    if(counterHour<10)
    sch="0"+sch;
    if(counterMin<10)
    scm="0"+scm;
    if(counterSec<10)
    scs="0"+scs;
    document.getElementById("timer").innerHTML="Timer:<br/>"+sch+":"+scm+":"+scs;
},1000);
var btn=[];
for(var i=1;i<6;i++)
{
    let rowBtns=[];
    for(var j=1;j<6;j++)
    {
    let currID="btn"+String((i-1)*5+j);
    let currBtn=document.getElementById(currID);
    rowBtns.push(currBtn);
    rowBtns[j-1].innerHTML=((i-1)*5+j);
    }
    btn.push(rowBtns);
}
function generateCode()
{
    let code="";
    for(var i=0;i<5;i++)
    code+=String(btn[2][i].innerHTML)+" ";
    return code;
}
btn[1][1].onclick=()=>{
var tempAr=[];
//storing
tempAr.push(btn[1][0].innerHTML);
for(var i=0;i<3;i++) //to right
tempAr.push(btn[0][i].innerHTML);
for(var i=1;i<3;i++) //to down
tempAr.push(btn[i][2].innerHTML);
for(var i=1;i<3;i++) //to left
tempAr.push(btn[2][3-i-1].innerHTML);
//updating
var ind=0;
for(var i=0;i<3;i++) //to right
{
    btn[0][i].innerHTML=tempAr[ind++];
    btn[0][i].style["background-color"]="rgb(209, 4, 4)";
    btn[0][i].style["color"]="white";
}
for(var i=1;i<3;i++) //to down
{
    btn[i][2].innerHTML=tempAr[ind++];
    btn[i][2].style["background-color"]="rgb(209, 4, 4)";
    btn[i][2].style["color"]="white";
}
for(var i=1;i<3;i++) //to left
{
    btn[2][3-i-1].innerHTML=tempAr[ind++];
    btn[2][3-i-1].style["background-color"]="rgb(209, 4, 4)";
    btn[2][3-i-1].style["color"]="white";
}
btn[1][0].innerHTML=tempAr[ind];
btn[1][0].style["background-color"]="rgb(209, 4, 4)";
btn[1][0].style["color"]="white";
document.getElementById("codeArea").innerHTML=generateCode();
};
btn[1][3].onclick=()=>
{
    var tempAr=[];
    //storing
    tempAr.push(btn[1][2].innerHTML);
    for(var i=0;i<3;i++) //to right
    tempAr.push(btn[0][i+2].innerHTML);
    for(var i=1;i<3;i++) //to down
    tempAr.push(btn[i][4].innerHTML);
    for(var i=1;i<3;i++) //to left
    tempAr.push(btn[2][3-i+1].innerHTML);
    //updating
    var ind=0;
    for(var i=0;i<3;i++) //to right
    {
        btn[0][i+2].innerHTML=tempAr[ind++];
        btn[0][i+2].style["background-color"]="rgb(2, 199, 2)";
        btn[0][i+2].style["color"]="white";
    }
    for(var i=1;i<3;i++) //to down
    {
        btn[i][4].innerHTML=tempAr[ind++];
        btn[i][4].style["background-color"]="rgb(2, 199, 2)";
        btn[i][4].style["color"]="white";
    }
    for(var i=1;i<3;i++) //to left
    {
        btn[2][3-i+1].innerHTML=tempAr[ind++];
        btn[2][3-i+1].style["background-color"]="rgb(2, 199, 2)";
        btn[2][3-i+1].style["color"]="white";

    }
    btn[1][2].innerHTML=tempAr[ind];
    btn[1][2].style["background-color"]="rgb(2, 199, 2)";
    btn[1][2].style["color"]="white";
    document.getElementById("codeArea").innerHTML=generateCode();
};
btn[3][1].onclick=()=>{
    var tempAr=[];
    //storing
    tempAr.push(btn[3][0].innerHTML);
    for(var i=0;i<3;i++) //to right
    tempAr.push(btn[2][i].innerHTML);
    for(var i=1;i<3;i++) //to down
    tempAr.push(btn[i+2][2].innerHTML);
    for(var i=1;i<3;i++) //to left
    tempAr.push(btn[4][3-i-1].innerHTML);
    //updating
    var ind=0;
    for(var i=0;i<3;i++) //to right
    {
        btn[2][i].innerHTML=tempAr[ind++];
        btn[2][i].style["background-color"]="blue";
        btn[2][i].style["color"]="white";
    }
    for(var i=1;i<3;i++) //to down
    {
        btn[i+2][2].innerHTML=tempAr[ind++];
        btn[i+2][2].style["background-color"]="blue";
        btn[i+2][2].style["color"]="white";
    }
    for(var i=1;i<3;i++) //to left
    {
        btn[4][3-i-1].innerHTML=tempAr[ind++];
        btn[4][3-i-1].style["background-color"]="blue";
        btn[4][3-i-1].style["color"]="white";
    }
    btn[3][0].innerHTML=tempAr[ind];
    btn[3][0].style["background-color"]="blue";
    btn[3][0].style["color"]="white";
    document.getElementById("codeArea").innerHTML=generateCode();
    };
btn[3][3].onclick=()=>
    {
        var tempAr=[];
        //storing
        tempAr.push(btn[3][2].innerHTML);
        for(var i=0;i<3;i++) //to right
        tempAr.push(btn[2][i+2].innerHTML);
        for(var i=1;i<3;i++) //to down
        tempAr.push(btn[i+2][4].innerHTML);
        for(var i=1;i<3;i++) //to left
        tempAr.push(btn[4][3-i+1].innerHTML);
        //updating
        var ind=0;
        for(var i=0;i<3;i++) //to right
        {
            btn[2][i+2].innerHTML=tempAr[ind++];
            btn[2][i+2].style["background-color"]="yellow";
            btn[2][i+2].style["color"]="black";
        }
        for(var i=1;i<3;i++) //to down
        {
            btn[i+2][4].innerHTML=tempAr[ind++];
            btn[i+2][4].style["background-color"]="yellow";
            btn[i+2][4].style["color"]="black";
        }
        for(var i=1;i<3;i++) //to left
        {
            btn[4][3-i+1].innerHTML=tempAr[ind++];
            btn[4][3-i+1].style["background-color"]="yellow";
            btn[4][3-i+1].style["color"]="black";
        }
        btn[3][2].innerHTML=tempAr[ind];
        btn[3][2].style["background-color"]="yellow";
        btn[3][2].style["color"]="black";
        document.getElementById("codeArea").innerHTML=generateCode();
    };
    var initCode="21 16 15 8 13 ";
    var submit=document.getElementById("sub");
    submit.onclick=()=>{
        var tempCode=generateCode();
        if(tempCode==initCode)
        {
            window.alert("Congratulations!!!\nyou broke the code!!!");
        }
        else
        {
            window.alert("Failed!!!\nTry again!!!");
        }
    }
    document.body.scrollTop=document.body.scrollHeight;