/* 
  OBJETIVO - quando clicarmos no botão que mostra a imagem de fundo correspondente

  - passo 1 - dar um jeito de pegar o elemento HTML dos botões

  - passo 2 - dar um jeito de indentifivar o clique do usuario no botão

  - passo 3 - desmarcar o botão selecionado anterior

  - passo 4 - marcar o botãoclicado como se estivesse selecionado

  - passo 5 - esconder a imagem ativa de fundo 

  - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
      desativarBotaoSelecionado();

      selecionarBotaoCarrossel(botao);

      esconderImagemAtiva();

      mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
