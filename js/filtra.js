//filtra
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);// this é referente ao dono do evento
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        console.log("Tem algo digitado")
        for(var i= 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i")//criando uma expressão regular
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel");
        }
    } 
    
});
