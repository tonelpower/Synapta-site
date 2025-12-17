import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-black border-t-4 border-white" style={{ borderStyle: 'double' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/synapta_ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 border-2 border-white p-2 hover:border-gray-300 bg-zinc-900 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]"
            >
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
            </a>
            <a
              href="https://www.facebook.com/share/14RNz6k5hqW/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200 border-2 border-white p-2 hover:border-gray-300 bg-zinc-900 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]"
            >
              <Facebook className="w-5 h-5" strokeWidth={2.5} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; 2025 SYNAPTA. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
