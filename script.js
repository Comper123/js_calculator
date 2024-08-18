const actions = ['/', '%', '*', '-', '+', '.'];
var history = [];
var is_history = false;
var is_no_calc = false;

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
        return;
    }
    if (actions.includes(elem) && actions.includes(calc.value.slice(-1))){
        if (elem == calc.value.slice(-1)){
                calc.value += "";
        } else {
            if (calc.value !== "-"){
                calc.value = calc.value.slice(0, -1);
                calc.value += elem;
            }
            // if (elem === "-" && !actions.includes(calc.value.slice(-2))) {
            //     calc.value += elem;
            //     return
            // }
        }
    } else {
        calc.value += elem;
    }
}

function calc() {
    var calc = document.getElementById('calc');
    var last_calc = document.getElementById('last_calc');
    var history = document.getElementById('history');
    
    if (!is_no_calc) {
        is_no_calc = true
    }

    if (actions.includes(calc.value.slice(-1)) || calc.value == ""){
        return;
    }
    
    if (calc.value !== 'Error'){
        last_calc.value = calc.value;
        try {
            let result = eval(calc.value);
            if (String(result).indexOf('.') === -1) {
                calc.value = result;
            } else {
                calc.value = result.toFixed(3);
            }
        } catch {
            calc.value = "Error";
        }
        
        // Добавляем запись в историю вычислений
        let note = document.createElement('a')
        note.setAttribute('onclick', `load_calculation('${last_calc.value}', ${calc.value})`)
        let calculation = document.createElement('p')
        calculation.textContent = last_calc.value
        let result = document.createElement('p')
        result.textContent = calc.value
        note.appendChild(calculation)
        note.appendChild(result)
        history.appendChild(note)
    }
}

function openHistory() {
    var results = document.getElementById('results');
    var buttons = document.getElementById('buttons');
    var history = document.getElementById('history');
    var button = document.getElementById('btn_change');
    var no_history = document.getElementById('no_history');

    if (!is_history) {
        // Открываем историю
        results.style.display = 'none';
        buttons.style.display = 'none';
        history.style.display = 'flex';
        button.style.backgroundColor = '#c4c1c1';
        if (no_history && is_no_calc) {
            no_history.remove()
        }
    } else {
        // Закрываем историю
        results.style.display = 'flex';
        results.style.flexDirection = 'column'
        buttons.style.display = 'grid';
        history.style.display = 'none';
        button.style.backgroundColor = '';
    }
    is_history = !is_history
}

function load_calculation(calculation, res) {
    openHistory();
    var calc = document.getElementById('calc');
    var last_calc = document.getElementById('last_calc');
    calc.value = res;
    last_calc.value = calculation;
    
}