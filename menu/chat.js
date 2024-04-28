const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    sendMessage(messageText);
    messageInput.value = '';
  }
});

function sendMessage(messageText) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent-message');
  messageElement.textContent = messageText;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз при добавлении нового сообщения
}
