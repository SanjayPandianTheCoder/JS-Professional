const deleteButton = document.getElementById("btn");

function deleteMessage(){
    var ans = window.confirm("Sure wanna delete ?");
    if(!ans){
        alert("You chose not to delete");
    }
    else{
        alert("You chose to delete");
    }
}

deleteButton.addEventListener("click", ()=>{
    deleteMessage();
})