/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }
document.addEventListener('DOMContentLoaded', function() {
    atualizarHTML();
});

let listaMensagens = []

function adicionarMensagem(apelido, mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  });
  atualizarHTML();
}
function formatarMensagens() {
  let mensagensFormatadas = '';
  for (let mensagem of listaMensagens) {
    mensagensFormatadas +=`
      <div class="chat-message"><span class="chat-message-apelido">${mensagem.apelido}</span><span class="chat-message-item">${mensagem.mensagem}</span>
      </div>`;
  }

  return mensagensFormatadas;
}
 function atualizarHTML(){
  const chatMessagesElement = document.getElementById('chat-messages');
  if (chatMessagesElement) {
    chatMessagesElement.innerHTML = formatarMensagens();
  } else {
    console.error("Elemento 'chat-messages' não encontrado.");
  }
}
function commitMessageClickHandler(){
  const inputMensagem = document.getElementById('message-input');
  const mensagem = inputMensagem.value.trim();
  if (mensagem !== ''){
    adicionarMensagem ('SeuApelido', mensagem);
    inputMensagem.value = '';
  }
}


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------
