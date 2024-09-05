

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
        document.getElementById("resultado").innerHTML = 0
    }
    else if (memory == NaN) {
        document.getElementById("resulatdo").innerText = "Não é possivel dividir por 0"
    }
    else {
        document.getElementById("caixa_de_exibição").innerHTML = memory
        document.getElementById("resultado").innerHTML = 0;
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

            let pos1 = Number(resultado[i - 1])
            let pos2 = Number(resultado[i + 1])
            let conversão1, conversão2
            conversão1 = String(pos1)
            conversão2 = String(pos2)

            if (conversão1 == "NaN") {
                resultado[i - 1] = "1"
            }
            else if (conversão2 == "NaN") {
                resultado[i + 1] = 1
            }

            resultado[i + 1] = resultado[i - 1] * resultado[i + 1]
            resultado[i] = ""
            resultado[i - 1] = ""
            document.getElementById("resultado").innerHTML = resultado[i + 1]
        }
        else if (resultado[i] == "/") {

            if ((resultado[i + 1] == 0) || (resultado[i + 1] == "0")) {
                document.getElementById("resultado").innerHTML = "Não é possivel dividir por 0"
            }
            else if ((resultado[i + 1] == 0) || (resultado[i + 1] == "0.0.0")) {
                document.getElementById("resultado").innerHTML = "Não é possivel dividir por 0"
            }
            else {
                let pos1 = Number(resultado[i - 1])
                let pos2 = Number(resultado[i + 1])
                let conversão1, conversão2
                conversão1 = String(pos1)
                conversão2 = String(pos2)

                if (conversão1 == "NaN") {
                    resultado[i - 1] = 1
                    document.getElementById("caixa_de_exibição").innerHTML = 0
                    document.getElementById("resultado").innerHTML = 0
                }
                else if (conversão2 == "NaN") {
                    resultado[i + 1] = 1
                    document.getElementById("caixa_de_exibição").innerHTML = 0
                    document.getElementById("resultado").innerText = 0
                }
                else {
                    resultado[i + 1] = resultado[i - 1] / resultado[i + 1]
                    resultado[i] = ""
                    resultado[i - 1] = ""
                    document.getElementById("resultado").innerHTML = resultado[i + 1]
                }
            }
        }

        // newarray = resultado.toString().replaceAll(",", "")

        adicaoEsubtração(resultado)



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

            let pos1 = Number(valoresRes[i - 1])
            let pos2 = Number(valoresRes[i + 1])
            let conversão1, conversão2
            conversão1 = String(pos1)
            conversão2 = String(pos2)

            if (conversão1 == "NaN") {
                valoresRes[i - 1] = "0"
            }
            else if (conversão2 == "NaN") {
                valoresRes[i + 1] = 0
            }

            valoresRes[i + 1] = Number(valoresRes[i - 1]) + Number(valoresRes[i + 1])
            soma = valoresRes[i + 1]
            document.getElementById("resultado").innerHTML = soma;
            console.log("area adição", soma)
        }
        else if (valoresRes[i] == "-") {

            let pos1 = Number(valoresRes[i - 1])
            let pos2 = Number(valoresRes[i + 1])
            let conversão1, conversão2
            conversão1 = String(pos1)
            conversão2 = String(pos2)

            if (conversão1 == "NaN") {
                valoresRes[i - 1] = "0"
            }
            else if (conversão2 == "NaN") {
                valoresRes[i + 1] = 0
            }


            valoresRes[i + 1] = Number(valoresRes[i - 1]) - Number(valoresRes[i + 1])
            soma = valoresRes[i + 1]
            document.getElementById("resultado").innerHTML = soma;
            console.log("area subtração", soma)
        }
    }
}










// calculadora em javascript sem a utilização do metodo eval() 





