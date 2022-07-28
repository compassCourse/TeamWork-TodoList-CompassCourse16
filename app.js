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
}