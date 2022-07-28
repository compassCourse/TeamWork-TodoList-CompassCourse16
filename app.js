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
    let emptyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);
    emptyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emptyListItem);
    document.getElementById("myInput").value = "";
}