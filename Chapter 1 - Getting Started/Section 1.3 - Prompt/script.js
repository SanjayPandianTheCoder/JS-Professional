const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    promptMessage();
})

function promptMessage(){
    window.prompt("How old are you?",0);
}