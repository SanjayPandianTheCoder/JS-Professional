const btn = document.getElementById("btn");

function alertMessage(){
    window.alert("The button has been clicked");
}

btn.addEventListener("click",()=>{
    console.log("Button has been clicked");
    alertMessage();
});

