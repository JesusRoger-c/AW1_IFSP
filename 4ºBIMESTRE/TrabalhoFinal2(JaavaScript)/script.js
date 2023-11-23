// Função para permitir notificações (simulação)
function allowNotifications() {
    // Aqui você pode implementar a lógica para solicitar permissão real para notificações
    alert("Nova Música enviada!");
    closePopup();
  }
  
  // Função para fechar o pop-up
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Mostrar o pop-up quando a página carregar
  window.onload = function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  };
  