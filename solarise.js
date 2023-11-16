var cep = document.getElementById("CEP");

cep.addEventListener("input", function() {
   var value = cep.value.replace(/\D/g, ''); // Remove não dígitos
   if (value.length > 5) {
      cep.value = value.slice(0, 5) + '-' + value.slice(5, 8);
   } else {
      cep.value = value;
   }
});

var inputLuz = document.getElementById("luz");

inputLuz.addEventListener("input", function() {
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

function calculadoraSolar() {
    var email = document.getElementById("mail").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
    const radiacao = 4.93
    var conta = document.querySelector("#luz").value
    var contaf = parseFloat(conta.replace(",", ".").replace(/[^\d,.]/g, ""))
    var conc = document.getElementById("emp").value

    if (conc == "Band"){
        var taxa = 0.7
    }
    else if (conc == "AME"){
        var taxa = 0.4
    }

    var kwh = contaf / taxa *(1.4)
    var produc = (radiacao * 0.2 * 265) * 30
    var qtd = kwh / (produc/30)
    var area = qtd * 4.5

   

    if (regex.test(email)) {
        console.log(`Email: ${email}\nConta: ${contaf}\nConcessionária: ${conc}\nTaxa: ${taxa}\nKilowatt: ${kwh.toFixed(0)}\nProdução: ${produc.toFixed(0)}\nQtd: ${qtd}\nÁrea: ${area}`)
        alert("Email válido!");
    } else {
        alert("Por favor, insira um email válido.");
    }
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
      calculadoraSolar();
    }
  }, false);

