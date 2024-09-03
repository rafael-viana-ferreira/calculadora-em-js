
var valor, conteudo;
var separar, form
var memory


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
    let memory

    if (val[0] == "-") {
        val[2] = val[0] + val[1]
        val[2] = Number(val[2])
        val.shift()
        val.shift()

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

    multiplicaçãoEdivisão(val)
}


function multiplicaçãoEdivisão(val) {
    let resultado = val
    let newarray
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i] == "*") {
            resultado[i + 1] = resultado[i - 1] * resultado[i + 1]
            resultado[i] = ""
            resultado[i - 1] = ""
            document.getElementById("resultado").value = resultado[i + 1]
        }
        else if (resultado[i] == "/") {
            resultado[i + 1] = resultado[i - 1] / resultado[i + 1]
            resultado[i] = ""
            resultado[i - 1] = ""
            document.getElementById("resultado").value = resultado[i + 1]
        }
        else {
            adicaoEsubtração(resultado)
        }

        newarray = resultado.toString().replaceAll(",", "")
    }
}

function adicaoEsubtração(resultado, newarray) {
    let res = resultado
    let form = newarray
    let valoresRes = res.toString().replaceAll(",", "").replaceAll("+", ",+,").replaceAll("-", ",-,")
    valoresRes = valoresRes.split(",")
    let soma = 0

    for (let i = 0; i < valoresRes.length; i++) {
        if (valoresRes[i] == "+") {
            valoresRes[i + 1] = Number(valoresRes[i - 1]) + Number(valoresRes[i + 1])
            soma = valoresRes[i + 1]
            document.getElementById("resultado").value = soma;
        }
        else if (valoresRes[i] == "-") {
            valoresRes[i + 1] = Number(valoresRes[i - 1]) - Number(valoresRes[i + 1])
            soma = valoresRes[i + 1]
            document.getElementById("resultado").value = soma;
        }
    }
}










// calculadora em javascript sem a utilização do metodo eval() 





