/*login*/
const email = document.getElementById("email");
const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");
const senha = document.getElementById("senha");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const btn = document.querySelector(".btn");

/*funçao login*/
function login() {
  if (email.value.length == 0) {
    error2.style.display = "initial";
    email.style.borderColor = "red";
    error.style.display = "none";
  } else if (
    email.value.indexOf("@") == -1 ||
    (email.value.length < 13 && email.value.length > 0) ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    error2.style.display = "none";
    error.style.display = "initial";
    email.style.borderColor = "red";
  } else {
    error2.style.display = "none";
    error.style.display = "none";
    email.style.borderColor = "gray";
    var emails = true;
  }

  if (senha.value.length == 0) {
    senha.style.borderColor = "red";
    error4.style.display = "initial";
    error3.style.display = "none";
  } else if (senha.value.length < 8) {
    senha.style.borderColor = "red";
    error3.style.display = "initial";
    error4.style.display = "none";
  } else {
    senha.style.borderColor = "gray";
    error4.style.display = "none";
    error3.style.display = "none";
    var senhas = true;
  }

  if (senhas == true && emails == true) {
    texto1.textContent = "Login efetuado com sucesso.";
    texto1.style.fontSize = "25pt";
    email.style.display = "none";
    error.style.display = "none";
    error2.style.display = "none";
    senha.style.display = "none";
    error3.style.display = "none";
    error4.style.display = "none";
    texto2.style.display = "none";
    btn.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
  } else {
  }
}
