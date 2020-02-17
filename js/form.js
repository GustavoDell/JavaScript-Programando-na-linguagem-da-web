var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();// Função que previne o comportamento padrão do browser(Está função remove o comportamento padrão já inserido no elemento)
    
    var form = document.querySelector("#form-adiciona");
   
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
   //cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    console.log(pacienteTr);

    form.reset()//Função reset() limpa os campos de um form com conteudo que foi passado

});

//Extraindo infomações do form
function obtemPacienteDoFormulario(form){
    //criando um objeto paciente
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
   
    return paciente;
}
function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")//Adicionado uma class na tag pelo metodo classList
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}
function montaTd(dado, classe){
    
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td
}