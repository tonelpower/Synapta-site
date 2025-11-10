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

        <h2 className="text-2xl md:text-4xl text-white leading-relaxed font-medium mb-6" style={{ letterSpacing: '-0.02em', lineHeight: '1.4' }}>
          Conținut și experiențe vizuale născute din AI.
        </h2>
      </div>
    </section>
  );
}
