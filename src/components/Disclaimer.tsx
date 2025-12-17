import { useEffect, useRef, useState } from 'react';

export default function Disclaimer() {
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

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            DISCLAIMER
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            AI can help create UGC, content, ads and automations.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            But there is a big <span className="text-white font-semibold">BUT</span>.
            <br />
            Even AI needs a human behind it.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            When you see ads, UGC or content that is obviously AI,
            <br />
            it is not the software's fault.
            <br />
            It is 100% the creator's fault.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            Most AI creators stop at generic prompts:
            <br />
            "ultra realistic", "4K", "editorial".
            <br />
            In reality, these words mean nothing without direction.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            Creating content with AI requires consistency,
            <br />
            proper integration, adaptive prompting,
            <br />
            iteration and real editing.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            That is why at Synapta we don't just generate AI content.
            <br />
            We integrate it, refine it
            <br />
            and make it work inside your real business context.
          </p>
        </div>
      </div>
    </section>
  );
}
