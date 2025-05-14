// GuardianScan - popup.js
// Interface do popup da extensão para controle e visualização do status

document.addEventListener('DOMContentLoaded', function() {
  // Estado inicial
  let isProtectionEnabled = true;
  let detectedThreats = [];
  let scanStatus = 'idle';

  // Elementos da UI
  const statusElement = document.getElementById('protection-status');
  const toggleButton = document.getElementById('toggle-protection');
  const threatsList = document.getElementById('threats-list');
  const scanButton = document.getElementById('start-scan');

  // Atualiza o status de proteção na UI
  function updateProtectionStatus() {
    statusElement.textContent = isProtectionEnabled ? 'Proteção Ativa' : 'Proteção Desativada';
    statusElement.className = isProtectionEnabled ? 'status-active' : 'status-inactive';
    toggleButton.textContent = isProtectionEnabled ? 'Desativar Proteção' : 'Ativar Proteção';
  }

  // Atualiza a lista de ameaças detectadas
  function updateThreatsList() {
    threatsList.innerHTML = '';
    if (detectedThreats.length === 0) {
      threatsList.innerHTML = '<li class="no-threats">Nenhuma ameaça detectada</li>';
      return;
    }
    
    detectedThreats.forEach(threat => {
      const li = document.createElement('li');
      li.className = 'threat-item';
      li.innerHTML = `
        <span class="threat-icon">⚠️</span>
        <div class="threat-details">
          <strong>${threat.type}</strong>
          <span>${threat.url}</span>
          <small>Bloqueado em: ${new Date(threat.timestamp).toLocaleString()}</small>
        </div>
      `;
      threatsList.appendChild(li);
    });
  }

  // Toggle de proteção
  toggleButton.addEventListener('click', function() {
    isProtectionEnabled = !isProtectionEnabled;
    updateProtectionStatus();
    
    // Envia mensagem para o background script
    chrome.runtime.sendMessage({
      action: 'toggleProtection',
      enabled: isProtectionEnabled
    });
  });

  // Iniciar varredura manual
  scanButton.addEventListener('click', function() {
    if (scanStatus === 'scanning') return;
    
    scanStatus = 'scanning';
    scanButton.textContent = 'Escaneando...';
    scanButton.disabled = true;

    // Envia mensagem para o background script iniciar a varredura
    chrome.runtime.sendMessage({ action: 'startScan' });
  });

  // Listener para mensagens do background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
      case 'threatDetected':
        detectedThreats.unshift({
          type: message.threatType,
          url: message.url,
          timestamp: Date.now()
        });
        updateThreatsList();
        break;

      case 'scanComplete':
        scanStatus = 'idle';
        scanButton.textContent = 'Iniciar Varredura';
        scanButton.disabled = false;
        break;

      case 'statsUpdate':
        updateStats(message.stats);
        break;
    }
  });

  // Atualiza estatísticas
  function updateStats(stats) {
    document.getElementById('scripts-monitored').textContent = stats.scriptsMonitored;
    document.getElementById('threats-blocked').textContent = stats.threatsBlocked;
    document.getElementById('scan-date').textContent = new Date().toLocaleString();
  }

  // Inicialização: solicita estado atual ao background script
  chrome.runtime.sendMessage({ action: 'getState' }, response => {
    if (response) {
      isProtectionEnabled = response.isProtectionEnabled;
      detectedThreats = response.detectedThreats;
      updateProtectionStatus();
      updateThreatsList();
      updateStats(response.stats);
    }
  });
});