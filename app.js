
function sendMail() {
    window.location.href = "mailto:me@example.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("")
        + "&body=" + encodeURIComponent(document.getElementById('eMailInput').value);
}



function addTodoinList() {
    console.log("todo had been added");

    let todoListInput = document.getElementById("myInput").value;
    let todoListUL = document.getElementById("myUL");
    let emptyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);

    emptyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emptyListItem);

    document.getElementById("myInput").value = "" ;
}


