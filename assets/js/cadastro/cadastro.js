const nome = document.getElementById("name");
const sobrenome = document.getElementById("surname");
const email = document.getElementById("email");
const rg = document.getElementById("id");
const cep = document.getElementById("cep")
const rua = document.getElementById ("rua");
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("uf")
const numero = document.getElementById("numero")
const complemento = document.getElementById("complemento")

function cadastro (){
    if (nome.value == '' || sobrenome.value == '' || email.value == '' || rg.value == '' ||
    cep.value == '' || rua.value == '' || bairro.value == '' || cidade.value == '' || estado.value == '' ||
    numero.value == '' || complemento.value == ''){
        alert ("Preencha todos os campos.")
    }

    else{
        alert ("Cadastro realizado.")
    }
}