const buttonMedicamentos = document.querySelector("#medicamentos");
const listaRemedios = document.querySelector(".remedios");

// variaveis da validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidacao = document.querySelector("button");

//fundo da validação
buttonValidacao.addEventListener("click", function(event) {
    event.preventDefault();

    if(campoNome.value.trim() === '') {
        alert("Preencha o campo nome");
        return false;
    }

    if(campoCidade.value.trim() === '') {
        alert("Preencha o campo cidade")
        return false;
    }

    clearForm();
    campoNome.value = '';
    campoCidade.value = '';
});

function

buttonMedicamentos.addEventListener("click", function(){
    listaRemedios.classList.add("d-block");
})

