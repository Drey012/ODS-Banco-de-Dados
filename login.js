function validar() {

  var email = document.getElementById("email").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
  var senha = document.getElementById("senha").value;

  if (regex.test(email) && senha.length >= 8) {
    var caixa = document.querySelector(".aviso"); c = caixa.style;
    c.display = "block"
    document.getElementById("mai").innerHTML = email
    document.getElementById("semha").innerHTML = senha
  } else {
    alert("O Campo 'E-mail' deve ser preenchido com um E-mail válido.\nA senha deve conter ao menos 8 dígitos.");
  }
}

document.addEventListener('keypress', function(e){
  if(e.which == 13){
    validar();
  }
}, false);

function voltar() {
  var caixa = document.querySelector(".aviso"); c = caixa.style;
    c.display = "none"
}

function reload() {
  location.reload()
}