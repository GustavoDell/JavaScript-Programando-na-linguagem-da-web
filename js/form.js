var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();// Função que previne o comportamento padrão do browser(Está função remove o comportamento padrão já inserido no elemento)
    
    var form = document.querySelector("#form-adiciona");
   
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
   //cria a tr e td do paciente

    //chamando a função valid paciente
    var erros = validaPaciente(paciente);
   
    if(erros.length > 0){
        //chamando a função exibe mensagem de erro
        exibeMensagensDeErro(erros);
        return;//return vazio ele sai da função sem dar continuidade na execução do codigo
    }

    
    //adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente);

    tabela.appendChild(pacienteTr);
    form.reset()//Função reset() limpa os campos de um form com conteudo que foi passado
    //removendo mensagens de erro caso o paciente seja válido
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

//Esta função cria um li para cada mensagem de erro contida no array
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";//innerHTML permite controlar o html interno de um elemento(conteudo filho de um elemento)
    
    erros.forEach(function(erro){//Em javascript todo array possui uma função forEach
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

/**Essa função cria um array de erros e caso enconter algum erro em alguma propriedade 
do paciente, adiciona ao array de erros a mensagem que será exibida**/
function validaPaciente(paciente){
    
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("O nome é não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido");//Adicionando valores dentro do Array
    } 
    if(!validaAltura(paciente.altura)){ 
        erros.push("Altura é invalida");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("o peso não pode ser em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}


