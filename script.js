// Obtém referência para o documento atual
const doc = app.activeDocument;

// Seleciona a imagem original (certifique-se de ter uma seleção ativa no Illustrator)
const originalImage = doc.selection[0];

// Define as variáveis iniciais de tamanho, posição e quantidade de duplicações
let size = 1.1; // Fator de aumento de tamanho
let x = 0; // Posição X da nova imagem
let y = 0; // Posição Y da nova imagem

// Loop para duplicar a imagem original 5 vezes
for (let i = 0; i < 5; i++) {

  // Cria uma nova imagem usando a API
  const newImage = doc.placedItems.add();

  // Define dimensões da nova imagem
  newImage.width = originalImage.width * size;
  newImage.height = originalImage.height * size;

  // Define a posição da nova imagem
  newImage.position = [x, y];

  // Aumenta o tamanho para a próxima iteração
  size += 0.1;

  // Atualiza as posições para evitar que as imagens se sobreponham
  x += originalImage.width * size;
  y += originalImage.height * size;

}

// Salva o documento
doc.save();
