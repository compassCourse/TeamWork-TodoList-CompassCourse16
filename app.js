
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

    document.getElementById("myInput").value = "" ;

    if(todoListInput === "") {
        alert("Line is empty, please enter ToDo in the input field");
    }
    else {
        todoListUL.appendChild(emptyListItem);
    }
}

function randomColour() {
    let rgb = "rgba(" ;
    for(let start = 0 ; start < 3 ; start++ ) {
        rgb += Math.floor(Math.random() * 255) + "," ;
        // console.log(rgb);
    }
    return rgb

}

function settingNewValue() {
    let randomValue0 = randomColour() ;
    let randomValue1 = randomColour() ;
    document.documentElement.style.setProperty("--randomColour0", randomValue0 + "1)") ;
    document.documentElement.style.setProperty("--randomColour1", randomValue1 + "1)") ;

}

setInterval(settingNewValue, 1500) ;

