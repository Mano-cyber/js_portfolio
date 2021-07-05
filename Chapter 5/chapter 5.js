var item1;
var item2;
var item3;
var item4;
var item5;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter first thing:");
    item2 = prompt("Enter second thing");
    item3 = prompt("Enter third thing");
    item4 = prompt("Enter fouth thing")
    item5 = prompt("Enter fifth thing")
    updateList();
}

function updateList() {
    document.getElementById("a").innerHTML = item1;
    document.getElementById("s").innerHTML = item2;
    document.getElementById("d").innerHTML = item3;
    document.getElementById("f").innerHTML = item4;
    document.getElementById("g").innerHTML = item5;
}