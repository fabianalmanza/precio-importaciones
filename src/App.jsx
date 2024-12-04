import { useState } from 'react';
import Navegacion from './components/Navegacion';
import CalculadoraPrecio from './components/CalculadoraPrecio';
import ConsultaAntidumping from './components/ConsultaAntidumping';
import VistaIframe from './components/VistaIframe';
import TablaMunicipios from './components/TablaMunicipios';
import TablaPaises from './components/TablaPaises';
import TablaUsuariosAduaneros from './components/TablaUsuariosAduaneros';

function App() {
  const [vistaActual, setVistaActual] = useState('calculadora');

  const renderizarVista = () => {
    switch (vistaActual) {
      case 'calculadora':
        return <CalculadoraPrecio />;
      case 'antidumping':
        return <ConsultaAntidumping />;
      case 'arancel':
        return (
          <VistaIframe 
            url="https://muisca.dian.gov.co/WebArancel/DefConsultaNomenclaturaPorCodigo.faces"
            titulo="Consulta Arancel" 
          />
        );
      case 'municipios':
        return <TablaMunicipios />;
      case 'paises':
        return <TablaPaises />;
      case 'usuarios':
        return <TablaUsuariosAduaneros />;
      default:
        return <CalculadoraPrecio />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sistema de Importaciones
          </h1>
        </div>

        <Navegacion onCambiarVista={setVistaActual} />
        {renderizarVista()}
      </div>
    </div>
  );
}

export default App;