import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from './components/hero/Hero';
import './styles.css';

function App() {
  return (
    <div className="w-screen h-screen bg-[#f8fafc] overflow-hidden">
      <Hero modelPath="/cube.glb" />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
