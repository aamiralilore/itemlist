const additem = document.getElementById("additem");
const removeitem = document.getElementById("Removeitem");
const clearAll = document.getElementById("clearAll");
const text = document.getElementById("text");
const main = document.getElementById("main");
const content = document.getElementById("content");


function addingitem() {
    const item = document.createElement("p");
    item.innerText = text.value;
    item.className = "beautiful";
    content.appendChild(item);
    const input = "item " + localStorage.length;
    localStorage.setItem(input, text.value);
}


function removingitem() {
    const items = document.getElementsByClassName("beautiful");
    if(items.length > 0) {
        const lastposition = items.length -1;
        content.removeChild(items[lastposition]);
        localStorage.removeItem(items[lastposition]);
    } else {
        console.log("There's nothing to be removed");
    }
}

function deleteAll() {
    const clearitems = document.getElementsByClassName("beautiful");
    while (clearitems.length > 0){
        clearitems[0].parentNode.removeChild(clearitems[0]);
    }
}

function cleareverything() {
    const clearfield = document.getElementById("text");
    clearfield.value='';
}


additem.addEventListener("click", addingitem);
removeitem.addEventListener("click", removingitem);
clearAll.addEventListener("click", deleteAll);
additem.addEventListener("click", cleareverything);
