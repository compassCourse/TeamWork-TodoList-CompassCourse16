function sendMail() {
    window.location.href =
        " mailto:teeculkid@gmail.com" +
        "?cc=" +
        "&subject=" + encodeURIComponent("") +
        "&body=" + encodeURIComponent(document.getElementById("emailInput").value)
    }

function addTodoinList(){
    let todoListInput = document.getElementById("myInput");
    let todolistUl = document.getElementById("myUl");
    let emptyListItem = document.createElement("li");
    let textNodeTodo = document.createTextNode(todoListInput);

    emptyListItem.appendChild(textNodeTodo);
    todolistUl.appendChild(emptyListItem);
    document.getElementById("myInput").value= "";

    console.log("Todo has been added!");

}
