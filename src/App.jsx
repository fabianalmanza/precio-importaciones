import { useState, useMemo, useEffect } from 'react';
import Navegacion from './components/Navegacion';
import CalculadoraPrecio from './components/CalculadoraPrecio';
import ConsultaAntidumping from './components/ConsultaAntidumping';
import VistaIframe from './components/VistaIframe';
import TablaMunicipios from './components/TablaMunicipios';
import TablaPaises from './components/TablaPaises';
import TablaUsuariosAduaneros from './components/TablaUsuariosAduaneros';
import VistaAnticipadas from './components/VistaAnticipadas';
import { IframeProvider } from './context/IframeContext';

function App() {
  const [vistaActual, setVistaActual] = useState('calculadora');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const iframeArancel = useMemo(() => (
    <div style={{ display: vistaActual === 'arancel' ? 'block' : 'none' }}>
      <VistaIframe
        url="https://muisca.dian.gov.co/WebArancel/DefConsultaNomenclaturaPorCodigo.faces"
        titulo="Consulta Arancel"
        onLoad={() => setIframeLoaded(true)}
      />
    </div>
  ), [vistaActual]);

  useEffect(() => {
    // Precarga el iframe cuando la aplicación se inicia
    if (!iframeLoaded) {
      const preloadIframe = document.createElement('iframe');
      preloadIframe.src = "https://muisca.dian.gov.co/WebArancel/DefConsultaNomenclaturaPorCodigo.faces";
      preloadIframe.style.display = 'none';
      document.body.appendChild(preloadIframe);
    }
  }, []);

  const renderizarVista = () => {
    switch (vistaActual) {
      case 'calculadora':
        return <CalculadoraPrecio />;
      case 'antidumping':
        return <ConsultaAntidumping />;
      case 'arancel':
        return iframeArancel;
      case 'municipios':
        return <TablaMunicipios />;
      case 'paises':
        return <TablaPaises />;
      case 'usuarios':
        return <TablaUsuariosAduaneros />;
      case 'anticipadas':
        return <VistaAnticipadas />;
      default:
        return <CalculadoraPrecio />;
    }
  };

  return (
    <IframeProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full max-w-7xl mx-auto py-6 px-2 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Sistema de Importaciones
            </h1>
          </div>

          <Navegacion onCambiarVista={setVistaActual} />
          <div className="bg-white shadow rounded-lg p-2 sm:p-4 lg:p-8 overflow-x-auto">
            {renderizarVista()}
          </div>
          {!iframeLoaded && iframeArancel}
        </div>
      </div>
    </IframeProvider>
  );
}

export default App;