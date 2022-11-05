/*senha*/

const email = document.getElementById("email");
const error = document.querySelector(".error");
const item = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".btn");
const item5 = document.querySelector(".item5");
const btn = document.querySelector(".btn2");

function enviar() {
  if (
    email.value.indexOf("@") == -1 ||
    email.value.length < 13 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    error.style.display = "initial";
    item3.style.borderColor = "red";
  } else {
    error.style.display = "none";
    item.textContent = "E-mail de confirmação enviado!";
    item.style.fontSize = "25pt";
    item2.textContent =
      "Caso o e-mail inserido esteja cadastrado, você receberá uma confirmação por e-mail. Por favor verifique e entre no link correspondente.";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "initial";
    item5.style.fontSize = "10pt";
    item5.style.color = "#90e0ef";
    btn.style.display = "initial";
  }
}
