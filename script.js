document.addEventListener("DOMContentLoaded", function() {
    var message = "João Pedro B. Rodrigues";
    var typingDiv = document.querySelector('.typing-text');
    var index = 0;
  
    function typeLetter() {
      if (index < message.length) {
        typingDiv.textContent += message[index++];
        setTimeout(typeLetter, Math.random() * 100); // Adjust the typing speed here
      }
    }
  
    typeLetter();
  });