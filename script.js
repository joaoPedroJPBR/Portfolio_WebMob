document.addEventListener("DOMContentLoaded", function() {
    var message = "João Pedro B. Rodrigues";
    var typingDiv = document.querySelector('.typing-text');
    var index = 0;
  
    function typeLetter() {
      typingDiv.textContent += message[index++];
      if (index < message.length) {
        setTimeout(typeLetter, Math.random() * 150); // Adjust the typing speed here
      }
    }
  
    typeLetter();
  });
  