//AJAX fazendo requisição com javascript de modo assincrono
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();//Objeto do javascript reponsavel por fazer requisições http

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Função que informa qual o tipo de requisição deve ser feita e para onde
    
    xhr.send();//Pega requisição criada e envia a mesma

    xhr.addEventListener("load",function(){//"load" quando a resposta estiver carregada
    var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText//ResponseText tras todo o contedo que esta na API
            console.log(resposta)
            console.log(typeof resposta); //typeof tras o tipo da resposta

            var paciente = JSON.parse(resposta);//Le o JSON e retorna um objeto javascript
            console.log(paciente)
            console.log(typeof paciente);

            paciente.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

        
    });
});