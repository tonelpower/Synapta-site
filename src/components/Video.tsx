export default function Video() {
  return (
    <section className="relative py-32 px-6 bg-black">
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

      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            SHOWREEL
          </h2>
        </div>

        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', border: '1px solid rgba(255,255,255,0.6)' }}>
            <iframe
              src="https://player.vimeo.com/video/1147429995?badge=0&autopause=1&autoplay=0&muted=0&loop=0"
              frameBorder="0"
              allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Synapta Showreel"
            ></iframe>
          </div>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </section>
  );
}
