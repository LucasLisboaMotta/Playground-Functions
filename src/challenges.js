const compareTrue = (alfa, beta) => alfa && beta;

const calcArea = (base, altura) => (base * altura) / 2;

const splitSentence = (frase) => frase.split(' ');

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

const footballPoints = (vitoria, empate) => (vitoria * 3) + empate;

const highestCount = (array) => (array.sort((a, b) => b - a)
  .lastIndexOf(array[0]) - array.sort((a, b) => b - a).indexOf(array[0])) + 1;

const catAndMouse = (rato, gato1, gato2) => {
  let cat1 = Math.abs(rato - gato1);
  let cat2 = Math.abs(rato - gato2);
  if (cat1 < cat2) return 'cat1';
  if (cat2 < cat1) return 'cat2';
  return 'os gatos trombam e o rato foge';
};

const fizzBuzz = (array) => array.map((element) => {
  if (!(element % 15)) return 'fizzBuzz';
  if (!(element % 3)) return 'fizz';
  if (!(element % 5)) return 'buzz';
  return 'bug!';
});

const encode = (codigo) => {
  const letras = ['a', 'e', 'i', 'o', 'u'];
  const numeros = ['1', '2', '3', '4', '5'];
  return codigo.split('').map((letra) => {
    if (letras.includes(letra)) return numeros[letras.indexOf(letra)];
    return letra;
  }).join('');
};

const decode = (decodigo) => {
  const letras = ['a', 'e', 'i', 'o', 'u'];
  const numeros = ['1', '2', '3', '4', '5'];
  return decodigo.split('').map((letra) => {
    if (numeros.includes(letra)) return letras[numeros.indexOf(letra)];
    return letra;
  }).join('');
};

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
