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
  let area = (base * altura) / 2
  return area
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
console.log(concatName(['captain', 'my', 'captain']))
// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
