function entrar(imail){
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")

    var re = /\S+@\S+\.\S+/;
  return re.test(email);

  if (imail = "false"){
    alert("insira valores válidos")
}
}