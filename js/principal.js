//document representa o documento arquivado na memoria do computador.
var titulo = document.querySelector(".titulo");//querySelector é utilizado para pegar um elemento da pagina html.
titulo.textContent = "Aparecida Nutricionista";//textContent serve para pegar diretamente o conteudo da tag.


var pacientes = document.querySelectorAll(".paciente");//querySelector é utilizado para pegar uma lista de elementos da pagina html.



for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]; //Pegando os indices dos pacientes
    
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;//textContent serve para pegar diretamente o conteudo da tag.

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000 ){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido";
        //Jeito correto de se fazer(boa pratica)
        paciente.classList.add("paciente-invalido");//A propriedade 'classList' retorna todas as classes de um objeto e tambem alguns metodos.
        //Metodo 'add' noz permite adcionar uma nova classe aquele objeto.
    }
    if(altura <= 0 || altura >= 3.00 ){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";//A propriedade textCorent serve também para se alterar o conteudo das tags
        //Jeito errado de se fazer(má pratica)
        paciente.style.backgroundColor = "orange";//A propriedade modifica o estilo da pagina html, e após isso é possivel escolher qual estilo deseja modificar
    }

    if(alturaEhValida && pesoEhValido){
        var imc =  peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2);//A função toFixed() limita a quantidade de casas decimais.
    }
}

titulo.addEventListener("click", function(){
        console.log("Olha só posso chamar uma função anonima.");
    }/*Fazer uma função diretamente 
no parametro do evento é conhecida como função anonima*/
);/*addEventListener() é um escutador de evento do JavaScript(Ele escutado os eventos do usuário
(interações) ele fica ouvindo os eventos de qualque elemento hrml que for selecionado)*/

function mostraMensagem(){
    console.log("Olá eu fui clicado!")
}/*Isto é uma função nomeada, que uma função que é criada do lado de fora do evento evento*/


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();// Função que previne o comportamento padrão do browser(Está função remove o comportamento padrão já inserido no elemento)
    console.log("Oi eu sou um botão e fui clicado")
});







