// Selecionando os elementos
const naoOption = document.getElementById('nao');
const message = document.getElementById('message');

// Função para exibir a mensagem "Boa escolha!!!"
function showMessage() {
  message.classList.remove('hidden');
}

// Função para ocultar a opção "Não"
function hideOption() {
  naoOption.classList.add('hidden');
}

// Função para verificar a posição do cursor do mouse
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const naoRect = naoOption.getBoundingClientRect();
  const naoX = naoRect.left + naoRect.width / 5;
  const naoY = naoRect.top + naoRect.height / 5;

  const distance = Math.sqrt(Math.pow(mouseX - naoX, 2) + Math.pow(mouseY - naoY, 2));

  if (distance < 100) {
    hideOption();
  }
});
