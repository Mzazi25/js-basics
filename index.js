let form = document.getElementById("myform");

//Define Male and Female names

let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
let Female = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


var dayInput = document.getElementById("day").value;
var monthInput = document.getElementById("month").value;
var yearInput = document.getElementById("year").value;

document.getElementById("myform").addEventListener("submit", akanNames);

function akanNames(){
    let CC = parseInt(yearInput.subSting(0,2));
    let YY = parseInt(yearInput.subSting(2,4));
    let dayOfWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthInput+1)/10)) + dayInput ) % 7;


    if(dayInput <=0 || dayInput>31){
        alert("Enter Valid Date")

    }

    if(monthInput<=0 || monthInput>12){
        alert("Enter a Valid Month")
    }

    






}