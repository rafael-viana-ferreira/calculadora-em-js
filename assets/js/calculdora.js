
var valor, conteudo;
var separar, memory, form

/*function inserir(caracteres) {
    conteudo = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").value += conteudo + caracteres;
}*/

function inserir(caracteres) {
    conteudo = document.getElementById("resultado").innerHTML;
    form = document.getElementById("resultado").value += conteudo + caracteres;
    verificação(form)
}

function verificação(verif) {
    str = verif
    let form, exibir
    form = str.split("")
    console.log(form)
    if (form[0] == "-") {
        let valor
        let lixo
        valor = form[0] + form[1]
        form[1] = valor
        lixo = form.shift()
        let formatacaoFinal = form.toString().replaceAll(",", "")
        exibir = formatacaoFinal.split("+")
        console.log(exibir)
    }

}

function apagarUltimoElemento() {
    let cont = document.getElementById("resultado").value;
    let num = cont.split("");
    let lixo = num.pop();
    let exibir = num.toString();
    let formatacao = exibir.replaceAll(",", "");
    document.getElementById("resultado").value = formatacao;
}

function apagar() {
    document.getElementById("resultado").value = "";
}


/*function valores() {
    let valor = 0
    let memory = document.getElementById("resultado").value;
    let format = memory.split("+")
    for (let i of format) {
        valor += Number(i)
    }

    document.getElementById("resultado").value = valor

} */


function valores() {
    let valor = 0
    let memory = str
    let verificação = memory.split("")
    console.log(verificação)
    for (let i of verificação) {
        console.log(i)
        if (i == "+") {
            let operadoradi = "+"
            if (operadoradi == "+") {
                let format = memory.split("+")
                for (let i of format) {
                    valor += Number(i)
                    document.getElementById("resultado").value = valor
                }
            }
        }
        else if (i == "-") {
            let operadorsub = "-"
            if (operadorsub == "-") {
                let format = memory.split("-")
                valor = format[0] - format[1]
                document.getElementById("resultado").value = valor
            }
        }
        else if (i == "*") {
            let operadormut = "*"
            if (operadormut == "*") {
                let format = memory.split("*")
                valor = format[0] * format[1]
                document.getElementById("resultado").value = valor
            }
        }
    }
}

