function validar() {

    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
    var senha = document.getElementById("senha").value;
    var nome = document.getElementById("nome").value;
  
    if (regex.test(email) && senha.length > 8 && nome != 0) {
      var caixa = document.querySelector(".aviso"); c = caixa.style;
      c.display = "block"
      document.getElementById("mai").innerHTML = email
      document.getElementById("semha").innerHTML = senha
      document.getElementById("span").innerHTML = nome
    } else {
      alert("Por favor, insira um email válido.\nA senha deve conter entre 8 e 15 caracteres.");
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