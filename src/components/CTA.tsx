import { useEffect, useRef, useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [formStartTime] = useState(Date.now());
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail.includes('@')) {
      setErrorMessage('Te rog să introduci o adresă de email validă');
      return;
    }

    if (!trimmedMessage) {
      setErrorMessage('Te rog să introduci un mesaj');
      return;
    }

    setIsSubmitting(true);

    const formData = {
      email: trimmedEmail,
      companyName: companyName.trim(),
      industry: industry.trim(),
      message: trimmedMessage,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch('https://hook.eu2.make.com/3yrk8a5uog3p8mr6udepd5ysvkv7lqvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage('Mesaj trimis cu succes!');
      setSubmitted(true);
      setEmail('');
      setCompanyName('');
      setIndustry('');
      setMessage('');

      setTimeout(() => {
        setSuccessMessage('');
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrorMessage('A apărut o eroare la trimiterea mesajului. Te rog să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 24px,
            rgba(255, 255, 255, 0.04) 24px,
            rgba(255, 255, 255, 0.04) 25px
          )
        `,
      }} />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
          Dă viață ideilor tale. Peste imaginație
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          Atenția costă. Fără ea, niciun brand nu există.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a href="https://calendly.com/dultefantonioo/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-semibold border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-base">
            <span className="flex items-center gap-2">
              Programează un apel de 15 minute
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="border-t-4 border-white pt-12" style={{ borderStyle: 'dashed' }}>
          <p className="text-white text-sm mb-6 uppercase tracking-wider font-medium">Sau trimite-ne un mesaj</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresa de email"
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-900 border-4 border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 text-base disabled:opacity-50"
              />
            </div>

            <div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Numele companiei"
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-900 border-4 border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 text-base disabled:opacity-50"
              />
            </div>

            <div>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Domeniu de activitate (ex: HoReCa, IT, Retail)"
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-900 border-4 border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 text-base disabled:opacity-50"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajul tău"
                rows={4}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 bg-zinc-900 border-4 border-white text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 text-base resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={submitted || isSubmitting}
              className="w-full px-8 py-4 bg-white text-black font-semibold text-base border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-[-2px] hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Se trimite...' : submitted ? 'Mesaj Trimis' : 'Trimite Mesaj'}
            </button>
          </form>

          {errorMessage && (
            <p className="mt-6 text-red-400 text-sm border-2 border-red-400 bg-zinc-900 px-4 py-3 inline-block">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="mt-6 text-white text-sm border-2 border-white bg-zinc-900 px-4 py-3 inline-block animate-scale-in">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
