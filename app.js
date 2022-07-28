function sendMail() {
    window.location.href = "mailto:rawmetal77@gmail.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("")
        + "&body=" + encodeURIComponent(document.getElementById('emailInput').value);

}

function addTodoinList() {
    let todoListInput = document.getElementById("myInput").value;
    let todoListUL = document.getElementById("myUL");
    let emtyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);


    emtyListItem.appendChild(textNodeTodo);
    todoListUL.appendChild(emtyListItem);
    console.lo("Todo has been added!");
    document.getElementById("myInput").value = "";
}