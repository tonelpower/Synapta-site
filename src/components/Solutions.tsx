import { useEffect, useRef, useState } from 'react';
import { Palette, Bot } from 'lucide-react';

const solutions = [
  {
    icon: Palette,
    title: 'AI Content Creation & Editing',
    description: 'Conținut creat de la zero cu AI — original, rapid și adaptat brandului tău. Ai deja materiale? Le optimizăm și le transformăm în vizualuri profesionale gata de postat.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Lead Capture Systems',
    description: 'Nu mai pierde lead-uri din lipsă de răspuns. Chatboți AI care preiau conversațiile, oferă suport și colectează date automat — 24/7.',
  },
];

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.03) 24px,
            rgba(255, 255, 255, 0.03) 25px
          )
        `,
      }} />

      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)
        `,
      }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4 font-medium">Servicii</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Content creation şi automatizare
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const delayClass = index === 0 ? 'animation-delay-300' : 'animation-delay-500';

            return (
              <div
                key={index}
                className={`group relative p-8 bg-zinc-900 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex-1 max-w-sm ${isVisible ? `animate-scale-in ${delayClass}` : 'opacity-0'}`}
              >
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border-4 border-white bg-black">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-6 h-6 border-2 border-white bg-white opacity-60" />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a href="https://calendly.com/dultefantonioo/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border-4 border-white text-black font-semibold bg-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            Hai sa vedem cum te putem ajuta
          </a>
        </div>
      </div>
    </section>
  );
}
