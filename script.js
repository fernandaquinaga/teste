// Obtém referência para o documento atual
const doc = app.activeDocument;

// Seleciona o vetor original (certifique-se de que um objeto vetorial esteja selecionado)
const originalVector = doc.selection[0];

// Loop para duplicar
for (let i = 0; i < 10; i++) {

  // Duplica o vetor original
  const newVector = originalVector.duplicate();

  // Aumenta tamanho
  newVector.width *= 1.5;
  newVector.height *= 1.5;

  // Move para uma nova posição (ajuste as coordenadas conforme necessário)
  newVector.left += 10; // Ajuste o valor conforme necessário
  newVector.top += 10; // Ajuste o valor conforme necessário
}
