export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/10 bg-cyan-500/5">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          <span className="font-mono text-xs text-gray-500 tracking-wider">DESPRE NOI</span>
        </div>

        <p className="text-2xl md:text-4xl text-white leading-relaxed font-medium mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}>
          Valorificăm puterea inteligenței artificiale pentru a crea automatizări fluide care sporesc
          <span className="text-cyan-400"> eficiența</span>,
          <span className="text-cyan-400"> luarea deciziilor</span> și
          <span className="text-cyan-400"> creșterea</span>.
        </p>

        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal max-w-3xl mx-auto">
          Conectăm creativitatea umană cu inteligența artificială pentru a transforma modul în care companiile funcționează în era modernă.
        </p>
      </div>
    </section>
  );
}
