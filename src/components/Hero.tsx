import { DottedSurface } from '@/components/ui/dotted-surface';
import { cn } from '@/lib/utils';
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <DottedSurface className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
              'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_50%)]',
              'blur-[30px]',
            )}
          />
        </div>
      </DottedSurface>

      <div className="absolute inset-0 z-5" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.08) 24px,
            rgba(255, 255, 255, 0.08) 25px
          )
        `,
      }} />

      <div className="absolute inset-0 z-10" style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
        `,
      }} />

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-white leading-[1.1] tracking-tight flex flex-col items-center">
          <TypewriterText
            text="Idei."
            speed={60}
            delay={500}
          />
          <TypewriterText
            text="Algoritmi."
            speed={60}
            delay={1300}
          />
          <TypewriterText
            text="Magie."
            speed={60}
            delay={2000}
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="https://calendly.com/dultefantonioo/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-semibold tracking-wide border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            <span className="flex items-center gap-2">
              Hai sǎ creǎm
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <button className="group px-8 py-4 border-4 border-white text-white font-semibold tracking-wide bg-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            <span className="flex items-center gap-2">
              Află mai mult
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60 text-xs uppercase tracking-widest font-medium animate-bounce">
        </div>
      </div>
    </section>
  );
}
