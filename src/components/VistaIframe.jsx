import { useState, useEffect, useRef } from 'react';

export default function VistaIframe({ url, titulo, onLoad }) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
    if (iframeRef.current) {
      iframeRef.current.contentWindow.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">{titulo}</h2>
      <div className="overflow-x-auto overflow-y-hidden mb-2">
        <div className="w-full" style={{ height: '10px' }}></div>
      </div>
      <div className="flex-1 relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={url}
          className="absolute top-0 left-0 w-full h-full"
          title={titulo}
          style={{
            border: 'none',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            transformOrigin: '0 0',
            transform: window.innerWidth < 720 ? 'scale(0.7)' : 'none'
          }}
          sandbox="allow-same-origin allow-scripts allow-forms"
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
} 