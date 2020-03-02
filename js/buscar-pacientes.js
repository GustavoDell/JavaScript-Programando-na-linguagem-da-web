var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();//Objeto do javascript reponsavel por fazer requisições http

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Função que informa qual o tipo de requisição deve ser feita e para onde
    
    xhr.send();//Pega requisição criada e envia a mesma

    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);//ResponseText tras todo o contedo que esta na API
    });
});