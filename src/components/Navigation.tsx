import { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white" style={{
      borderStyle: 'double',
      boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-typewriter font-bold tracking-wider" style={{ letterSpacing: '0.1em' }}>
          <span className="text-black border-4 border-white px-4 py-2 bg-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]">
            SYNAPTA
          </span>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-400 transition-colors text-sm font-medium"
          >
            Despre
          </button>
          <button
            onClick={() => scrollToSection('solutions')}
            className="text-white hover:text-gray-400 transition-colors text-sm font-medium"
          >
            Soluții
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gray-400 transition-colors text-sm font-medium"
          >
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
}
