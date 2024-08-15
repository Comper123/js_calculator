function clr() {
    document.getElementById('calc').value = "";
    document.getElementById('last_calc').value = "";
}

function clear_elem() {
    var calc = document.getElementById('calc');
    calc.value = calc.value.slice(0, -1);
}

function add(elem) {
    var calc = document.getElementById('calc');
    if (calc.value == "Error") {
        calc.value = ""
    }
    calc.value += elem;
}

function calc() {
    var calc = document.getElementById('calc');
    var last_calc = document.getElementById('last_calc');
    last_calc.value = calc.value;
    try {
        calc.value = eval(calc.value);
    } catch {
        calc.value = "Error";
    }
}