
var  valor ,  conteudo;  
var  separar , memory 

function inserir (caracteres) {
   conteudo = document.getElementById("resultado").innerHTML;
   document.getElementById("resultado").value += conteudo + caracteres
}  

function apagarUltimoElemento() {
   let cont = document.getElementById("resultado").value
   let num = cont.split("")
   let lixo = num.pop()
   let exibir = num.toString()
   let formatacao = exibir.replaceAll("," , "")
   document.getElementById("resultado").value = formatacao
}

function apagar() {
    document.getElementById("resultado").value = ""
} 


function adicao() {
    let cont = document.getElementById("resultado").value
    let form = []  
    form.push(cont) 
    console.log(form)

}