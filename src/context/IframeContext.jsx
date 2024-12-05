import { createContext, useState, useContext } from 'react';

const IframeContext = createContext();

export function IframeProvider({ children }) {
  const [iframeContent, setIframeContent] = useState(null);

  return (
    <IframeContext.Provider value={{ iframeContent, setIframeContent }}>
      {children}
    </IframeContext.Provider>
  );
}

export function useIframe() {
  return useContext(IframeContext);
} 