function showMessage(){

    alert("You have Ordered Sucessfully");
}

function checkNameValid(){
    var nameValue=document.getElementById("name").innerText;

    $("#name").value();
    var Regex='/^[^a-zA-Z]*$/';

 if(Regex.test(nameValue))
 {
 //...
 }
 else{

 }
}