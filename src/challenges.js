// Desafio 1
function compareTrue(alfa, beta) {
  if (alfa == true && beta == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2
}
// Desafio 3
function splitSentence(frase) {
  let array = []
  let frase2 = ''
  for (i = 0; i < frase.length; i += 1) {
    if (frase[i] == ' ') {
      array.push(frase2)
      frase2 = ''
    }  else if (i == frase.length - 1){
      frase2 += frase[i]
      array.push(frase2)        
  }else {
      frase2 += frase[i] 
    }
  }  return array
}

// Desafio 4
function concatName(array2) {
  let frase3 = ''
  for (i = 0; i < 3; i += 1) {
    if (i == 0) {
      frase3 += array2[array2.length - 1]
    } else if (i == 1) {
      frase3 += ', '
    } else {
      frase3 += array2[0]
    }
  } return frase3  
}

// Desafio 5
function footballPoints(vitoria, empate) {
  return (vitoria * 3) + empate
}

// Desafio 6
function highestCount(sequencia) {
  let seq1 = sequencia.sort(compararNumeros)
  let seq2 = []
  let seq3 = []
  let seq4 = []
  for (i = 0; i < seq1.length; i += 1) {
      seq2.push(seq1.indexOf(seq1[i]))
      seq3.push(seq1.lastIndexOf(seq1[i]))
  } for (i = 0; i < sequencia.length; i += 1) {
      seq4.push((seq3[i] - seq2[i]) + 1)
  } return seq4.sort(compararNumeros)[seq4.length - 1]
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// Desafio 7
function catAndMouse(rato, gato1, gato2) { 
  let cat1 = Math.abs(rato - gato1)
  let cat2 = Math.abs(rato - gato2)
  if (cat1 < cat2) {
    return "cat1"
  } else if (cat2 < cat1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array3) {
  let array4 = []
  for (i = 0; i < array3.length; i += 1) {
    if (array3[i] % 15 == 0) {
      array4.push('fizzBuzz')
    } else if (array3[i] % 3 == 0) {
      array4.push('fizz')
    } else if (array3[i] % 5 == 0) {
      array4.push('buzz')
    } else {
      array4.push("bug!")
    }
  } return array4
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};


// utilizei a função para orgarnizar os numeros do array em ordem crescente na prorpiedade .sort()
function compararNumeros(a, b) {
  return a - b;
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
