export default function Footer() {
  return (
    <footer className="relative mt-6 overflow-hidden bg-[var(--footer-bg)] px-6 py-8 text-white">
      {/* Decorative arcs */}
      <div className="absolute -top-8 left-0 size-24 rounded-br-full bg-[var(--accent-yellow)] opacity-90" />
      <div className="absolute -top-4 left-12 size-20 rounded-br-full bg-[var(--section-green)] opacity-90" />

      <div className="relative mx-auto max-w-lg text-center">
        <p className="mb-4 text-base font-medium">הצטרף למועדון החברים שלנו</p>
        <a
          href="#"
          className="mb-8 inline-block text-base font-medium underline underline-offset-2"
        >
          הרשמה
        </a>
        <div className="flex flex-row-reverse justify-center gap-12">
          <a href="#" className="flex flex-col items-center gap-2">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="text-sm">צור קשר</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-2">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="text-sm">שאלות ותשובות</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
