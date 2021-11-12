function compareTrue(alfa, beta) {
  if (alfa == true && beta == true) {
    return true
  } else {
    return false
  }
}

function calcArea(base, altura) {
  return (base * altura) / 2
}

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

function footballPoints(vitoria, empate) {
  return (vitoria * 3) + empate
}

function highestCount(sequencia) {
  return (sequencia.sort(compararNumeros).lastIndexOf(sequencia[sequencia.length - 1]) - sequencia.sort(compararNumeros).indexOf(sequencia[sequencia.length - 1])) + 1
}

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

function encode(codigo) {
  let letras = ["a", "e", "i", "o", "u"]
  let numeros = ["1", "2", "3", "4", "5"]
  let codificada = ''
  for (i = 0; i < codigo.length; i +=1) {
    for (i2 = 0; i2 < 6; i2 += 1){
      if (i2 == 5) {
        codificada += codigo[i]
      } else if (letras[i2] == codigo[i]){
        codificada += numeros[i2]
        break
      }
    }
  } return codificada
}
function decode(decodigo) {
  let letras1 = ["a", "e", "i", "o", "u"]
  let numeros1 = ["1", "2", "3", "4", "5"]
  let codificada1 = ''
  for (i = 0; i < decodigo.length; i +=1) {
    for (i2 = 0; i2 < 6; i2 += 1){
      if (i2 == 5) {
        codificada1 += decodigo[i]
      } else if (numeros1[i2] == decodigo[i]){
        codificada1 += letras1[i2]
        break
      }
    }
  } return codificada1
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
// link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compararNumeros(a, b) {
  return a - b;
}

