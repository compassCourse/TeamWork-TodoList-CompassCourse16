function sendMail() {
    window.location.href = "mailto:adineedwork@gmail.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
}

function addTodoInList(){
    let todoListInput = document.getElementById("myInput").value;
    let todoListUL = document.getElementById("myUL");

    if (todoListInput != ""){
        let emptyListItem = document.createElement("li");
        let textNodeTodo = document.createTextNode(todoListInput);
        emptyListItem.appendChild(textNodeTodo);
        todoListUL.appendChild(emptyListItem);
        document.getElementById("myInput").value = "";
    }else{
        //alert("Line is empty.")
    }
}

function randomColor(){
    let rgb = "rgba(";
    for (let i = 0; i < 3; i++){
        rgb += Math.floor(Math.random()*255) + ",";

    }

    return rgb;
}

function settingNewValue(){
    let randomValue0 = randomColor();
    let randomValue1 = randomColor();
    document.documentElement.style.setProperty("--randomColor0",randomValue0+"1)");
    document.documentElement.style.setProperty("--randomColor1",randomValue1+"1)");

}

setInterval(settingNewValue,5000);

