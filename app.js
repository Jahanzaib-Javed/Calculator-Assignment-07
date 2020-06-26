function getnumber(num) {
    var res = document.getElementById("res");
     res.value += num;
}

function clearresult() {
    var res = document.getElementById("res");
    res.value = "";
}
function getresult() {
    var res = document.getElementById("res");
    res.value = eval(res.value);
}
