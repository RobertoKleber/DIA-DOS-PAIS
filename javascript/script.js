window.addEventListener("load", () => {
  const audio = document.getElementById("musica");
  const botaoMusica = document.getElementById("botao-musica");
  const mensagem = document.getElementById("mensagem");

  // Tentar tocar a música automaticamente
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Música reproduzida automaticamente.");
      })
      .catch(() => {
        console.warn("Autoplay bloqueado. Será necessário clicar.");
      });
  }

  // Alerta de boas-vindas
  setTimeout(() => {
    alert("Bem-vindo! Hoje é um dia especial para homenagear todos os pais ❤️");
  }, 1000);

  // Alternar música (play/pause)
  botaoMusica.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      botaoMusica.textContent = "🔇 Pausar Música";
    } else {
      audio.pause();
      botaoMusica.textContent = "🔊 Tocar Música";
    }
  });

  // Interação ao passar o mouse no texto
  mensagem.addEventListener("mouseenter", () => {
    mensagem.textContent = "Você é o melhor pai do mundo!";
  });

  mensagem.addEventListener("mouseleave", () => {
    mensagem.textContent = "Obrigado por estar sempre ao nosso lado com amor e sabedoria.";
  });
});
