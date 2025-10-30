import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Database, Calendar } from 'lucide-react';

const benefits = [
  {
    icon: MessageCircle,
    title: 'Suport clienți care nu doarme niciodată',
    description: 'Răspunsuri instant, 24/7, pe chat, email sau telefon. Economisești ore de lucru și reduci frustrările clienților.',
  },
  {
    icon: Database,
    title: 'CRM care se actualizează singur',
    description: 'Fiecare lead urmărit și etichetat automat. Economisești timp și nu mai pierzi oportunități de vânzare.',
  },
  {
    icon: Calendar,
    title: 'Programări setate automat',
    description: 'Integrează-te cu calendarul tău și transformă interesul în întâlniri reale. Mai mulți clienți, mai multă satisfacție cu mai puțină muncă manuală.',
  },
];

export default function ValueProposition() {
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
    <section ref={sectionRef} id="about" className="relative py-32 px-6 bg-black">
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

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            AI-ul nu îți va lua locul. Dar cine îl folosește, da.
          </h2>
          <p className="text-xl text-gray-400 font-normal">Economisește timp și bani cu soluții inteligente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const animationClass = index === 0 ? 'animate-slide-in-left' : index === 2 ? 'animate-slide-in-right' : 'animate-fade-in-up';
            const delayClass = index === 0 ? 'animation-delay-200' : index === 1 ? 'animation-delay-400' : 'animation-delay-600';

            return (
              <div
                key={index}
                className={`group relative p-8 bg-zinc-900 border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 ${isVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}`}
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border-4 border-white bg-black">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed">
                  {benefit.description}
                </p>

                <div className="absolute top-2 right-2 w-6 h-6 border-2 border-white bg-white opacity-70" />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a href="https://calendly.com/dultefantonioo/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border-4 border-white text-black font-semibold bg-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            Cere audit
          </a>
        </div>
      </div>
    </section>
  );
}
