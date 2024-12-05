import { useState, useCallback, useRef } from 'react';

export default function Navegacion({ onCambiarVista }) {
  const [vistaActiva, setVistaActiva] = useState('calculadora');
  const botonesRef = useRef([]);

  const vistas = [
    { id: 'calculadora', nombre: 'Calculadora de Precio' },
    { id: 'antidumping', nombre: 'Consulta Antidumping' },
    { id: 'arancel', nombre: 'Consulta Arancel' },
    { id: 'municipios', nombre: 'Códigos Municipios' },
    { id: 'paises', nombre: 'Códigos Países' },
    { id: 'usuarios', nombre: 'Depósitos/Usuarios Aduaneros' }
  ];

  const cambiarVista = useCallback((vista, index) => {
    setVistaActiva(vista);
    onCambiarVista(vista);
    if (botonesRef.current[index]) {
      botonesRef.current[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [onCambiarVista]);

  const navegarConFlechas = (direccion) => {
    const indiceActual = vistas.findIndex(v => v.id === vistaActiva);
    let nuevoIndice;
    
    if (direccion === 'siguiente') {
      nuevoIndice = indiceActual + 1 >= vistas.length ? 0 : indiceActual + 1;
    } else {
      nuevoIndice = indiceActual - 1 < 0 ? vistas.length - 1 : indiceActual - 1;
    }
    
    cambiarVista(vistas[nuevoIndice].id, nuevoIndice);
  };

  return (
    <nav className="mb-8 relative">
      <button 
        onClick={() => navegarConFlechas('anterior')}
        className="absolute left-0 top-1/2 -translate-y-1/2 px-2 py-4 text-gray-500 hover:text-gray-700"
        aria-label="Anterior"
      >
        ⬅
      </button>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gradient scrollbar-track-gray-200 mx-8">
        <ul className="flex whitespace-nowrap min-w-max justify-start sm:justify-center space-x-4 px-2">
          {vistas.map((vista, index) => (
            <li key={vista.id}>
              <button
                ref={el => botonesRef.current[index] = el}
                onClick={() => cambiarVista(vista.id, index)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium ${
                  vistaActiva === vista.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {vista.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => navegarConFlechas('siguiente')}
        className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-4 text-gray-500 hover:text-gray-700"
        aria-label="Siguiente"
      >
        ➡
      </button>
    </nav>
  );
} 