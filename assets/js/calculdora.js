
var valor, conteudo;
var separar, form


function inserir(caracteres) {
    conteudo = document.getElementById("caixa_de_exibição").value;
    form = document.getElementById("caixa_de_exibição").value = conteudo + caracteres;
}

function apagarUltimoElemento() {
    let cont = document.getElementById("caixa_de_exibição").value;
    let num = cont.split("");
    let lixo = num.pop();
    let exibir = num.toString();
    let formatacao = exibir.replaceAll(",", "");
    document.getElementById("caixa_de_exibição").value = formatacao;
}

function apagar() {
    document.getElementById("caixa_de_exibição").value = "";
    document.getElementById("resultado").value = ""
}

function historico() {
    let memory;
    memory = document.getElementById("resultado").value;
    document.getElementById("caixa_de_exibição").value = memory
}

function valores() {
    let conteudo, verificacao, valores;
    conteudo = document.getElementById("caixa_de_exibição").value;
    verificacao = conteudo.replaceAll("+", ",+,").replaceAll("*", ",*,").replaceAll("-", ",-,").replaceAll("/", ",/,")
    valores = verificacao.split(",")

    trabalharComOsValores(valores)
}


function trabalharComOsValores(valores) {
    let val = valores

    if (val[0] == "-") {
        val[2] = val[0] + val[1]
        val[2] = Number(val[2])
        val.shift()
        val.shift()
        console.log(val)
    }
    else if ((val[0] == "") && (val[1] == "-")) {
        val[2] = val[1] + val[2]
        val.shift()
        val.shift()
    }
    else if ((val[0] == "/") || (val[0] == "*")) {
        val.shift()
        val.shift()
        document.getElementById("resultado").value = val
    }


    else {
        val.toString()
        document.getElementById("resultado").value = val

    }

    pilhaDeValores(val)

}

function pilhaDeValores(val) {
    let resultado = val
    let soma = 1


    for (let i = 0; i < resultado.length; i++) {

        if (resultado[i] == "*") {
            resultado[i + 1] = resultado[i - 1] * resultado[i + 1]
            soma = resultado[i + 1]
            document.getElementById("resultado").value = soma;
        }
        else if (resultado[i] == "/") {
            resultado[i + 1] = resultado[i - 1] / resultado[i + 1]
            soma = resultado[i + 1]
            document.getElementById("resultado").value = soma;
        }
        else if (resultado[i] == "+") {
            resultado[i + 1] = Number(resultado[i - 1]) + Number(resultado[i + 1])
            soma = resultado[i + 1]
            document.getElementById("resultado").value = soma;
        }
        else if (resultado[i] == "-") {
            resultado[i + 1] = resultado[i - 1] - resultado[i + 1]
            soma = resultado[i + 1]
            document.getElementById("resultado").value = soma
        }


    }

}










