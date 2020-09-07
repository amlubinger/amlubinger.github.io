function dropdownMenu(y) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.innerHTML = "<s>&nbsp;&nbsp;&nbsp;&nbsp;</s>Expand<s>&nbsp;&nbsp;&nbsp;&nbsp;</s>";
    } else {
        x.style.display = "block";
        y.innerHTML = "<s>&nbsp;&nbsp;&nbsp;&nbsp;</s>Collapse<s>&nbsp;&nbsp;&nbsp;&nbsp;</s>";
    }
}
