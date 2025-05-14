import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Settings, XCircle } from 'lucide-react';

const Detection: React.FC = () => {
  const [detectedThreats, setDetectedThreats] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [isFullPage, setIsFullPage] = useState(false);
  const [permissions, setPermissions] = useState({
    webRequest: false,
    storage: false,
    tabs: false
  });

  const [blocklist] = useState([
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.adservice.google.com/*",
    "*://*.adnxs.com/*",
    "*://*.advertising.com/*",
    "*://*.criteo.com/*",
    "*://*.pubmatic.com/*",
    "*://*.rubiconproject.com/*",
    "*://*.openx.net/*",
    "*://*.popads.net/*",
    "*://*.propellerads.com/*",
    "*://*.exoclick.com/*",
    "*://*.coinhive.com/*",
    "*://*.coin-hive.com/*",
    "*://*.jsecoin.com/*"
  ]);

  const startScan = () => {
    setIsScanning(true);
    setDetectedThreats([]);
    
    // Simulação de varredura em tempo real
    const scanInterval = setInterval(() => {
      const newThreat = blocklist[Math.floor(Math.random() * blocklist.length)]
        .replace("*://", "")
        .replace("/*", "");
      
      setDetectedThreats(prev => [...new Set([...prev, newThreat])]);
    }, 1000);

    // Parar após 5 segundos
    setTimeout(() => {
      clearInterval(scanInterval);
      setIsScanning(false);
    }, 5000);
  };

  const requestPermissions = (permission: keyof typeof permissions) => {
    // Simulação de requisição de permissão
    setPermissions(prev => ({
      ...prev,
      [permission]: true
    }));
  };

  const openFullDetection = () => {
    setIsFullPage(true);
    startScan();
  };

  if (!isFullPage) {
    return (
      <section id="detection" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detecção de Ameaças
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Faça uma varredura completa do seu navegador para identificar ameaças em tempo real.
            </p>
            <button
              onClick={openFullDetection}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2 mx-auto transition-all"
            >
              <Shield size={24} />
              Iniciar Detecção Completa
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-blue-900 to-blue-950 overflow-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 bg-blue-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-white" />
                <span className="text-white font-medium">Varredura em Tempo Real</span>
              </div>
              <button
                onClick={() => setIsFullPage(false)}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <XCircle size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Permissões */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(permissions).map(([key, granted]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border ${
                      granted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{key}</span>
                      {granted ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <button
                          onClick={() => requestPermissions(key as keyof typeof permissions)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Lock size={20} />
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {granted ? 'Permissão concedida' : 'Permissão necessária'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Controles */}
              <div className="mb-8 flex justify-center gap-4">
                <button
                  onClick={startScan}
                  disabled={isScanning || !Object.values(permissions).every(Boolean)}
                  className={`
                    px-6 py-3 rounded-lg font-medium text-white
                    flex items-center gap-2 transition-all
                    ${isScanning || !Object.values(permissions).every(Boolean)
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'}
                  `}
                >
                  <Shield size={20} />
                  {isScanning ? 'Escaneando...' : 'Iniciar Varredura'}
                </button>
                
                <button
                  className="px-6 py-3 rounded-lg font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2"
                >
                  <Settings size={20} />
                  Configurações
                </button>
              </div>

              {/* Status da Varredura */}
              {isScanning && (
                <div className="flex flex-col items-center gap-4 mb-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                  <p className="text-gray-600">Analisando scripts e conexões em tempo real...</p>
                </div>
              )}

              {/* Resultados */}
              <div className="space-y-4">
                {detectedThreats.map((threat, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
                    <AlertTriangle size={20} className="text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-red-900">Ameaça Detectada</p>
                      <p className="text-red-700 text-sm">{threat}</p>
                      <p className="text-red-600 text-xs mt-1">Bloqueado automaticamente</p>
                    </div>
                  </div>
                ))}

                {!isScanning && detectedThreats.length === 0 && (
                  <div className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-green-900">Nenhuma ameaça detectada</p>
                      <p className="text-green-700 text-sm">Seu navegador está protegido.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Estatísticas */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900">Scripts Monitorados</h4>
                  <p className="text-2xl font-bold text-blue-700">42</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-900">Ameaças Bloqueadas</h4>
                  <p className="text-2xl font-bold text-red-700">{detectedThreats.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900">Status de Proteção</h4>
                  <p className="text-2xl font-bold text-green-700">Ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detection;