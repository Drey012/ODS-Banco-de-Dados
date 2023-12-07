var cep = document.getElementById("CEP").value;
if (cep) {
    cep.addEventListener("input", function () {
        var value = cep.value.replace(/\D/g, ''); // Remove não dígitos
        if (value.length > 5) {
            cep.value = value.slice(0, 5) + '-' + value.slice(5, 8);
        } else {
            cep.value = value;
        }
    });
}

var inputLuz = document.getElementById("luz");
if (inputLuz) {
    inputLuz.addEventListener("input", function () {
        var value = inputLuz.value.replace(/\D/g, ''); // Remove não dígitos
    
        if (value.length > 2) {
            var reais = value.slice(0, -2);
            var centavos = value.slice(-2);
            var formattedValue = "R$" + reais + ',' + centavos;
            inputLuz.value = formattedValue;
        } else if (value.length > 0) {
            var formattedValue = "R$," + value.padStart(2);
            inputLuz.value = formattedValue;
        } else {
            inputLuz.value = "";
        }
    });
}

function calculadoraSolar() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
    var conta = document.querySelector("#luz").value
    var contaf = parseFloat(conta.replace(",", ".").replace(/[^\d,.]/g, ""))
    var conc = document.getElementById("emp").value

    if (conc == "Band") {
        var taxa = 0.7
    }
    else if (conc == "AME") {
        var taxa = 0.4
    }

    var kwh = contaf / taxa
    var produc = (kwh * 1000) / (4.93 * 0.8)
    var qtd = produc / 11100
    var area = qtd * 4.5
    var cep = document.getElementById("CEP").value; // Obtém o valor do CEP


    if (regex.test(email) && cep.length > 7 && conta.length > 0 && conc != "null") {
        console.log(`Email: ${email}\nConta: ${contaf}\nConcessionária: ${conc}\nTaxa: ${taxa}\nKilowatt: ${kwh.toFixed(0)}\nProdução: ${produc.toFixed(0)}\nQtd: ${qtd.toFixed(0)}\nÁrea: ${area.toFixed(0)}`)
        var janela = window.open(`calculadora_solar.html?kwh=${kwh}&produc=${produc}&qtd=${qtd}&area=${area}`, "_self");

    } else {
        alert("Por favor, preencha todas as informações devidamente.");
    }
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        calculadoraSolar();
    }
}, false);

document.addEventListener('DOMContentLoaded', function () {
    const variaveis = new URLSearchParams(window.location.search);
    const kwh = parseFloat(variaveis.get("kwh"));
    const produc = parseFloat(variaveis.get("produc"));
    const qtd = parseFloat(variaveis.get("qtd"));
    const area = parseFloat(variaveis.get("area"));
    var producao = produc / 1000
    document.getElementById("kwh").innerHTML = producao.toFixed(0)
    document.getElementById("potencia").innerHTML = kwh.toFixed(2)
    document.getElementById("area").innerHTML = area.toFixed(0)
    document.getElementById("qtd").innerHTML = qtd.toFixed(0)
});

