// Array para armazenar os dados
var resultado = [];
function calcularIMC(peso, altura)  {
    return peso / (altura * altura);
}

function resultadoimc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

// Função principal para coletar dados e calcular estatísticas
function calcularEstatisticas() {
   
    const resultado = [];

    // Inicialização de variáveis
    let totalUsuarios = 0;
    let maiorIMC = -1;
    let usuarioMaiorIMC = "";
    let somaIMC = 0;

    // Loop para coletar informações do usuário
    while (true) {
        let nome = prompt("Digite o nome do usuário (ou digite 'fim' para encerrar):");
        
        // Verificar se o usuário deseja encerrar
        if (nome.toLowerCase() === "fim") {
            break;
        }

        let peso = parseFloat(prompt("Digite o peso (em kg) de " + nome + ":"));
        let altura = parseFloat(prompt("Digite a altura (em metros) de " + nome + ":"));

        // Calcular o IMC
        let imc = calcularIMC(peso, altura);

        // Exibir a classificação do IMC
        let classificacao = resultadoimc(imc);
        console.log(nome + " tem um IMC de " + imc.toFixed(2) + " e está classificado como '" + classificacao + "'.");

        // Atualizar estatísticas
        totalUsuarios++;
        somaIMC += imc;

        // Verificar se o IMC é o maior até agora
        if (imc > maiorIMC) {
            maiorIMC = imc;
            usuarioMaiorIMC = nome;
        }
    }

    // Exibir resumo estatístico
    console.log("\nResumo Estatístico:");
    console.log("Total de usuários coletados: " + totalUsuarios);
    console.log("Usuário com maior IMC: " + usuarioMaiorIMC + " com IMC de " + maiorIMC.toFixed(2));
    console.log("Média dos IMC dos usuários: " + (somaIMC / totalUsuarios).toFixed(2));
}

// Chamar a função principal
calcularEstatisticas();
