function sendMail() {
    window.location.href = "mailto:adineedwork@gmail.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("")
        + "&body=" + encodeURIComponent(document.getElementById("emailInput").value);
}


function addTodoinList() {
    let todoListInput = document.getElementById("myInput").value;
    let textNodeTodo = document.createTextNode(todoListInput);
    let todoListUL = document.getElementById("myUL");
    let emptyListItem = document.createElement("li");

    emptyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emptyListItem);
    console.log("Todo has been added!");
    document.getElementById("myInput").value = "";
}