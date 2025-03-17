import React, { useState } from 'react';

// Importar todas las imágenes
import anticipadasVenezuela1 from '../assets/anticipadas/anticipadas venezuela1.jpg';
import anticipadasVenezuela2 from '../assets/anticipadas/anticipadas venezuela2.jpg';
import anticipadasVenezuela3 from '../assets/anticipadas/anticipadas venezuela3.jpg';
import anticipadas1 from '../assets/anticipadas/anticipadas1.jpg';
import exentasAnticipadas2 from '../assets/anticipadas/exentasanticipadas2.jpg';

export default function VistaAnticipadas() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const imagenes = [
        { src: anticipadasVenezuela1, titulo: "Anticipadas Venezuela 1" },
        { src: anticipadasVenezuela2, titulo: "Anticipadas Venezuela 2" },
        { src: anticipadasVenezuela3, titulo: "Anticipadas Venezuela 3" },
        { src: anticipadas1, titulo: "Anticipadas" },
        { src: exentasAnticipadas2, titulo: "Exentas Anticipadas" }
    ];

    const abrirImagen = (imagen) => {
        setImagenSeleccionada(imagen);
    };

    const cerrarImagen = () => {
        setImagenSeleccionada(null);
    };

    return (
        <div className="py-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Imágenes de Anticipadas</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {imagenes.map((imagen, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-2">
                            <h3 className="text-lg font-semibold mb-2 text-center">{imagen.titulo}</h3>
                        </div>
                        <div className="relative pb-[56.25%]">
                            <img
                                src={imagen.src}
                                alt={imagen.titulo}
                                className="absolute inset-0 w-full h-full object-contain cursor-pointer"
                                onClick={() => abrirImagen(imagen)}
                            />
                        </div>
                        <div className="p-4 flex justify-center">
                            <button
                                onClick={() => abrirImagen(imagen)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Ver imagen
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para ver la imagen completa */}
            {imagenSeleccionada && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-bold">{imagenSeleccionada.titulo}</h3>
                            <button
                                onClick={cerrarImagen}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
                            <img
                                src={imagenSeleccionada.src}
                                alt={imagenSeleccionada.titulo}
                                className="max-w-full max-h-[70vh] object-contain"
                            />
                        </div>
                        <div className="p-4 border-t flex justify-end">
                            <button
                                onClick={cerrarImagen}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}