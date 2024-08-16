const actions = ['/', '%', '*', '-', '+', '.'];

function clr() {
    document.getElementById('calc').value = "";
    document.getElementById('last_calc').value = "";
}

function clear_elem() {
    var calc = document.getElementById('calc');
    if (calc.value == "Error") {
        calc.value = "";
    } else {
        calc.value = calc.value.slice(0, -1);
    }
}

function add(elem) {
    var calc = document.getElementById('calc');
    if (calc.value == "Error" || (calc.value == "" && actions.includes(elem) && elem !== "-")) {
        calc.value = "";
        return
    }
    if (actions.includes(elem) && actions.includes(calc.value.slice(-1))){
        if (elem == calc.value.slice(-1)){
            calc.value += "";
        } else {
            if (calc.value !== "-"){
            calc.value = calc.value.slice(0, -1)
            calc.value += elem
            }
        }
    } else {
        calc.value += elem;
    }
}

function calc() {
    var calc = document.getElementById('calc');
    if (actions.includes(calc.value.slice(-1)) || calc.value == ""){
        return
    }
    var last_calc = document.getElementById('last_calc');
    if (calc.value !== 'Error'){
        last_calc.value = calc.value;
        try {
            calc.value = eval(calc.value);
        } catch {
            calc.value = "Error";
        }
    }
}