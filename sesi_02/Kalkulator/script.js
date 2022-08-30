
function input(num) {
    document.getElementById('textView').value = document.getElementById('textView').value + num;
}

function clearCalculator() {
    document.getElementById('textView').value = "";
}

function del() {
    var x = document.getElementById('textView').value;
    document.getElementById('textView').value = x.substring(0, x.length - 1);
}

function equal() {
        var x = document.getElementById('textView').value
        document.getElementById('textView').value = eval(x);
}

