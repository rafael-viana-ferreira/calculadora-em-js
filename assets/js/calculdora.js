
var valor, conteudo;
var separar, form
var memory


function inserir(caracteres) {
    conteudo = document.getElementById("caixa_de_exibição").innerHTML;
    form = document.getElementById("caixa_de_exibição").innerHTML = conteudo + caracteres;

    let numeroCaracteres = document.getElementById("caixa_de_exibição").innerHTML;

    if (numeroCaracteres.length > 8) {
        document.getElementById("caixa_de_exibição").style.fontSize = "18px";
    }
    else {
        document.getElementById("caixa_de_exibição").style.fontSize = "24px"
    }

    if (numeroCaracteres.length > 0) {
        document.getElementById("botao_apagar").innerHTML = "C"
    }
    if (numeroCaracteres == 0) {
        document.getElementById("botao_apagar").innerHTML = "AC"
    }
}



function apagarUltimoElemento() {
    let cont = document.getElementById("caixa_de_exibição").innerHTML;
    let num = cont.split("");
    let lixo = num.pop();
    let exibir = num.toString();
    let formatacao = exibir.replaceAll(",", "");
    document.getElementById("caixa_de_exibição").innerHTML = formatacao;
    if (formatacao == 0) {
        document.getElementById("botao_apagar").innerHTML = "AC"
    }

}

function apagar() {
    document.getElementById("caixa_de_exibição").innerHTML = "";
    document.getElementById("resultado").innerHTML = "0";
    document.getElementById("botao_apagar").innerHTML = "AC"
}

function historico() {
    let memory;
    memory = document.getElementById("resultado").innerHTML;
    if (memory == "Não é possivel dividir por 0") {
        document.getElementById("caixa_de_exibição").innerHTML = ""
        document.getElementById("resultado").innerHTML = "0"
    }
    else {
        document.getElementById("caixa_de_exibição").innerHTML = memory
        document.getElementById("resultado").innerHTML = "0";
    }
}

function valores() {
    let conteudo, verificacao, valores, caracter;
    conteudo = document.getElementById("caixa_de_exibição").innerHTML;
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
        document.getElementById("resultado").innerHTML = val

    }


    else {
        val.toString()
        document.getElementById("resultado").innerHTML = val

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
            document.getElementById("resultado").innerHTML = resultado[i + 1]
        }
        else if (resultado[i] == "/") {

            if (((resultado[i - 1] == 0) || (resultado[i - 1] == "0")) && (resultado[i + 1] == 0) || (resultado[i + 1] == "0")) {
                document.getElementById("resultado").innerHTML = "Não é possivel dividir por 0"
            }
            else {
                resultado[i + 1] = resultado[i - 1] / resultado[i + 1]
                resultado[i] = ""
                resultado[i - 1] = ""
                document.getElementById("resultado").innerHTML = resultado[i + 1]
            }

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
            document.getElementById("resultado").innerHTML = soma;
        }
        else if (valoresRes[i] == "-") {
            valoresRes[i + 1] = Number(valoresRes[i - 1]) - Number(valoresRes[i + 1])
            soma = valoresRes[i + 1]
            document.getElementById("resultado").innerHTML = soma;
        }
    }
}










// calculadora em javascript sem a utilização do metodo eval() 





