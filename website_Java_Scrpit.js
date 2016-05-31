function caculateTax() {
    var incomeInput = document.getElementById("incomeInput");
    var I = incomeInput.value;
    var taxOutput = document.getElementById("taxOutput");
    var T = incomeInput.value;
    
    if (I <= 16000) {
        T = 0;
        tax.innerHTML = "$" + T;
    } else if (I <= 52500) {
        T = (T - 16000) * 0.1;
        tax.innerHTML = "$" + T;
    } else if (I <= 113000) {
        T = ((T - 52500) * 0.16) + 3650;
        tax.innerHTML = "$" + T;
    } else if (I <= 184500) {
        T = ((T - 113000) * 0.24) + 13330;
        tax.innerHTML = "$" + T;
    } else {
        T = ((T - 184500) * 0.36) + 30490;
        tax.innerHTML = "$" + T;
    }
}