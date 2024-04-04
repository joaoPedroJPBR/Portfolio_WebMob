
//adicionando efeito typing no texto
document.addEventListener("DOMContentLoaded", function() {
    var message = "Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco, e Analista de Sistemas Júnior na Neurotech Tecnologia da Informação. Quando não estou estudando, costumo aproveitar meu tempo livre praticando esportes e saindo com os amigos. Gosto de ouvir músicas nos estilos: MPB, Forró, Sertanejo, Modão de viola, Samba, Pagode, Rock Internacional e Música Clássica Americana. Moro em Recife mas sou do interior, e sempre que posso vou para minha cidade visitar minha família.";
  
    var typingDiv = document.querySelector('.typing');
    var index = 0;
  
    function typeLetter() {
      typingDiv.textContent += message[index++];
      if (index < message.length) {
        setTimeout(typeLetter, Math.random() * 150); // Adjust the typing speed here
      }
    }
  
    typeLetter();
  });
  