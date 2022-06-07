// Desafio 10
const techList = (tecnologia, name) => {
  if (!tecnologia.length) return 'Vazio!';
  return tecnologia.sort().map((tech) => ({ name, tech }));
};

const generatePhoneNumber = (telefone) => {
  if (telefone.length !== 11) return 'Array com tamanho incorreto.';
  const numeroNovo = [...telefone].sort((a, b) => a - b);
  const maiorNumeroRepetido = numeroNovo.reduce((acumulador, numero) => {
    acumulador[numero] = acumulador[numero] + 1 || 1;
    return acumulador;
  }, {});
  const numeroRepetido = Object.values(maiorNumeroRepetido).sort((a, b) => b - a)[0];

  if (numeroNovo[0] < 0
    || numeroNovo.reverse()[0] > 9
    || numeroRepetido >= 3) return 'não é possível gerar um número de telefone com esses valores';

  telefone.splice(0, 0, '(');
  telefone.splice(3, 0, ')');
  telefone.splice(4, 0, ' ');
  telefone.splice(10, 0, '-');
  return telefone.join('');
};

// Desafio 12
const triangleCheck = (ladoA, ladoB, ladoC) => (
  (ladoB + ladoC) - ladoA > 0
  && (ladoA + ladoC) - ladoB > 0
  && (ladoA + ladoC) - ladoC > 0
);

// Desafio 13
function hydrate(bebidas) {
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const agua = bebidas.split('').reduce((acumulador, letra) => {
    if (numeros.includes(letra)) return acumulador + Number(letra);
    return acumulador;
  }, 0);

  if (agua > 1) return `${agua} copos de água`;
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
