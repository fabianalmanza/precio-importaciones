import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function VisorPDF() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="h-screen">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <div style={{ height: 'calc(100vh - 200px)' }}>
          <Viewer
            fileUrl="/Codigos_municipios_2007.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
} 