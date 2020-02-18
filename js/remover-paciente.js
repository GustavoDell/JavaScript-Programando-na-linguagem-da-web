var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(){//colocando escutador de e ventos direto no elemento pai 
    console.log(event.target);//event.target alvo do meu evento
    var alvoEvento = event.target;
    alvoEvento.parentNode.classList.add("fadeOut"); 
    setTimeout(function(){
        alvoEvento.parentNode.remove();// parentNode pega o pai da tag em que esta sendo clicada
    },500);//setTimeoutFunção de tempo do javascript que indica um tempo para execultar algo
    
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();//this palavra de contexto em javascript que indentifica quem acionou o evento(Quem esta atrelado ao evento)
//     });
// });