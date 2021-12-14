let form = document.getElementById("myform");

//Define Male and Female names

let Male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
let Female = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


var dayInput = document.getElementById("day").value;
var monthInput = document.getElementById("month").value;
var yearInput = document.getElementById("year").value;

form.addEventListener("submit", akanNames);

function akanNames(e){

    e.preventDefault();

    let CC = parseInt(yearInput.subSting(0,2));
    let YY = parseInt(yearInput.subSting(2,4));
    let dayOfWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthInput+1)/10)) + dayInput ) % 7;


    if(dayInput===""){
        alert("Please input the day")

    }else if (dayInput<=0 || dayInput>31){
        alert("Enter Valid Day")

    }

    if(monthInput ===""){ 
    alert ("Please input the day")
    }else if (monthInput >12){
        alert("Please Enter a valid Day")
    
    }
    // Male Akan Names

    if (document.getElementById("check").Male & dayOfWeek[0] ){
        alert("Hey, your Akan name is Kwasi")

    }
    if (document.getElementById("check").Male & dayOfWeek[1] ){
        alert("Hey, your Akan name is Kwadwo")
    }
    if (document.getElementById("check").Male & dayOfWeek[2] ){
        alert("Hey, your Akan name is Kwabena")
    }
    if (document.getElementById("check").Male & dayOfWeek[4] ){
        alert("Hey, your Akan name is Kwaku")
    }
    if (document.getElementById("check").Male & dayOfWeek[5] ){
        alert("Hey, your Akan name is Yaw")
    }
    if (document.getElementById("check").Male & dayOfWeek[6] ){
        alert("Hey, your Akan name is Kofi")
    }
    if (document.getElementById("check").Male & dayOfWeek[6] ){
        alert("Hey, your Akan name is Kwame")
    }







}