// Desafio 10
function techList(tecnologia, nome) {
  let listaTec = [];
  if (tecnologia.length === 0) {
    return 'Vazio!';
} else {
    for (i = 0; i < tecnologia.length; i += 1) {
        listaTec.push({"name": nome, "tech": tecnologia.sort()[i]})
   }  return listaTec
   } 
}

// Desafio 11
function generatePhoneNumber(telefone) {
  let seq6 = ''
  for (i = 0; i < 15; i += 1 ) {
    if ( i == 0) {
        seq6 += "("
    } else if (i >= 1 && i <= 2) {
        seq6 += telefone[i - 1]
    } else if (i == 3) {
        seq6 += ")"
    } else if (i == 4) {
        seq6 += " "
    }else if (i >= 5 && i <= 9) {
        seq6 += telefone[i - 3]
    } else if (i == 10) {
        seq6 += "-"
    } else {
        seq6 += telefone[i - 4]
    } 
}
  let seq1 = [...telefone.sort()]
  let seq2 = []
  let seq3 = []
  let seq4 = []
  let seq5 = []
  for (i = 0; i < seq1.length; i += 1) {
      seq2.push(seq1.indexOf(seq1[i]))
      seq3.push(seq1.lastIndexOf(seq1[i]))
  } for (i = 0; i < seq1.length; i += 1) {
      seq4.push((seq3[i] - seq2[i]) + 1)
  } seq5 = seq4.sort(compararNumeros)[seq4.length - 1]
 if (telefone.length < 11 || telefone.length > 11) {
    return "Array com tamanho incorreto."
} else if (seq5 > 2  || telefone.sort(compararNumeros)[0] < 0 || telefone.sort(compararNumeros)[telefone.length - 1] > 9 ) {
    return "não é possível gerar um número de telefone com esses valores"
} else {
    return seq6
  }
}

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  return (ladoB + ladoC) - ladoA > 0 && (ladoA + ladoC) - ladoB > 0 && (ladoA + ladoC) - ladoC > 0;
}

// Desafio 13
function hydrate(bebidas) {
  let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  let agua = 0;
  let unica = '1 copo de água';
  for (let i = 0; i < bebidas.length; i += 1) {
    for (let i2 = 0; i2 < 9; i2 += 1) {
      if (bebidas[i] === numeros[i2]) {
        agua += i2 + 1;
      }
    }
  } if (agua !== 1) {
    unica = numeros[agua - 1] + ' copos de água';
  } return unica;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// utilizei a função para orgarnizar os numeros do array em ordem crescente na prorpiedade .sort()
// link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compararNumeros(a, b) {
  return a - b;
}
// função para separar converter os numeros em string, atividade 11
function convertNumero(arrayN) {
  let seq6 = ''
  for (i = 0; i < 15; i += 1 ) {
    if ( i == 0) {
        seq6 += "("
    } else if (i >= 1 && i <= 2) {
        seq6 += arrayN[i - 1]
    } else if (i == 3) {
        seq6 += ")"
    } else if (i == 4) {
        seq6 += " "
    }else if (i >= 5 && i <= 9) {
        seq6 += arrayN[i - 3]
    } else if (i == 10) {
        seq6 += "-"
    } else {
        seq6 += arrayN[i - 4]
    }
} return seq6;
}
