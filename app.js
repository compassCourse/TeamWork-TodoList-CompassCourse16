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
}