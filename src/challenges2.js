// Desafio 10
function techList(tecnologia, nome) {
  let listaTec = []
  if (tecnologia.length == 0) {
    return 'Vazio!'
} else {
    for (i = 0; i < tecnologia.length; i += 1) {
        listaTec.push({"name": nome, "tech": tecnologia.sort()[i]})
   }  return listaTec
   } 
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
