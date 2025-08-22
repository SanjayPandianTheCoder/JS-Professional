const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    promptMessage();
})

function promptMessage(){
    var age = window.prompt("How old are you?",0);
    if(Number(age) >= 18){
        alert("You are accepted");
    }
    else{
        alert("You are rejected");
    }
}