function sendMail() {
    var link = "mailto:me@example.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById("emailInput").value);

    window.location.href = link;
}

let todoListInput = document.getElementById("myInput").value;
let todoListUL = document.getElementById("myUL");
let emptyListItem = document.createElement("li");

function addTodoinList() {

    let todoListInput = document.getElementById("myInput").value;
    let todoListUL = document.getElementById("myUL");
    let emptyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);

    emptyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emptyListItem);
    console.log("Todo has been added!");
    document.getElementById("myInput").value ="";
    if (todoListInput === ""){
        alert("Line is empty, please enter Todo in th input field")
    }
    else {
        todoListUL.appendChild(emptyListItem);
    }
}

function randomColor(){
    let rgb = "rgba(";
    for(let start = 0; start < 3; start++){
        rgb += Math.floor(Math.random() * 255) + ",";
        console.log("Hello World")
    }
    return rgb
}

function settingNewValue(){
    let randomValue0 = randomColor();
    let randomValue1 = randomColor();
    document.documentElement.style.setProperty("--randomColor0",randomValue0 + "1");
    document.documentElement.style.setProperty("--randomColor1",randomValue1 + "1");
}

setInterval(settingNewValue,1000);