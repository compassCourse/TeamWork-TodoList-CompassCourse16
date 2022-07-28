function sendMail() {
    window.location.href = "mailto:me@example.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("")
        + "&body=" + encodeURIComponent(document.getElementById("emailInput").value);
}

function addTodoinList(){
    let todoListInput = document.getElementById("myInput").value;
    let todoListUL = document.getElementById("myUl");
    let emptyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);

    emptyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emptyListItem);
    console.log("Todo has been added!");
    document.getElementById("myInput").value = "";
    if (todoListInput === ""){
        alert("Line is Empty, please enter Todo in the input field")

    }
    else{
        todoListUL.appendChild(emptyListItem);
    }
}

function randomColor(){
    let rgb = "rgba(";
    for(let start = 0; start < 3; start++){
 rgb += Math.floor(Math.random() * 255) + ",";
        console.log(rgb);
    }
    return rgb
}

function settingNewValue() {
    let randomValue0 = randomColor();
    let randomValue1 = randomColor();
    document.documentElement.style.setProperty("--randomColor0", randomValue0 + "1)");
    document.documentElement.style.setProperty("--randomColor1", randomValue1 + "1)");
}

setInterval(settingNewValue,1000);
