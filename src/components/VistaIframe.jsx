export default function VistaIframe({ url, titulo }) {
  return (
    <div className="h-screen">
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
      <iframe
        src={url}
        className="w-full h-[calc(100vh-200px)]"
        frameBorder="0"
        title={titulo}
      />
    </div>
  );
} 