import { useEffect, useRef, useState } from 'react';
import { Sparkles, Eye, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Creează',
    description: 'Totul începe cu o idee. O transformăm în imagine, video sau website — combinând generarea și editarea inteligentă cu ajutorul AI-ului.',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Captează',
    description: 'Atragem privirea. Conținutul tău iese din zgomot și prinde atenția oamenilor.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Monetizează',
    description: 'Atenția valorează. Transformăm interesul în acțiune și acțiunea în rezultate.',
  },
];

export default function HowItWorks() {
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
    <section ref={sectionRef} className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.04) 24px,
            rgba(255, 255, 255, 0.04) 25px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.02) 24px,
            rgba(255, 255, 255, 0.02) 25px
          )
        `,
      }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Atenția este noua monedã
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const delayClass = index === 0 ? 'animation-delay-300' : index === 1 ? 'animation-delay-500' : 'animation-delay-700';

            return (
              <div key={index} className="relative">
                <div className={`flex flex-col items-center text-center ${isVisible ? `animate-fade-in-up ${delayClass}` : 'opacity-0'}`}>
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 border-4 border-white bg-zinc-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                      <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-white border-4 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                      <span className="text-black text-lg font-bold">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-white" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #ffffff 0, #ffffff 8px, transparent 8px, transparent 16px)'
                  }} />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a href="https://calendly.com/dultefantonioo/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group relative inline-block px-8 py-4 bg-white text-black font-semibold border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            <span className="flex items-center gap-2">
              Programează un apel de 15 minute
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
