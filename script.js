var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");

var button=document.createElement("button");
button.innerHTML="Display Data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);

var div=document.createElement("div");
div.setAttribute("id","dispaly");

document.body.append(input,button,div);

function displaydata(){
    var inputs=document.getElementById("dob").value;
    console.log(inputs);
    if(Date.parse(inputs)){
        var inputdate=new Date(inputs);
        console.log(inputdate);
        var currentdate=new Date();
        console.log(currentdate);
        var millisec=currentdate.getTime()-inputdate.getTime();
        console.log(millisec);
        var sec=mathfloor(millisec,1000);
    console.log(sec);
    var min=mathfloor(sec,60);
    console.log(min);
    var hrs=mathfloor(min,60);
    console.log(hrs);
    var day=mathfloor(hrs,24);
    console.log(day);
    var month=getmonths(inputdate,currentdate);
    console.log(month);
    var year=getyears(inputdate,currentdate);
    console.log(year);
    div.innerHTML=`
     Given the Inputs date is ${inputs} <br>
    Years ${year}<br>
    Months ${month}<br>
    Days ${day} <br>
    Hours ${hrs}<br>
    Mintues ${min} <br>
    Seconds ${sec}<br>
    MilliSeconds ${millisec}<br>`;
   

    }else{
        console.log("invalid input entered");
    }

}


function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}
 
function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var month=(year*12)-1+(value2.getMonth()-value1.getMonth());
    return month;
}
