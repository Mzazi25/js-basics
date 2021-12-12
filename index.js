const firstName = document.getElementById(".firstName");
const birthday= document.getElementById(".birthday");
const checkBox= document.getElementById(".Checkbox");
document.getElementById("button").addEventListener('click', onSubmit)

function onSubmit(e){
    e.preventDefault();

    if (firstName === "" || birthday === "" || checkBox === ""){
        alert("Enter FirstName")
    }else{
        alert("Invalid Selection")
    }

   

}