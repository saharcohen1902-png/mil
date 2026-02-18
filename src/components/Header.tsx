export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between bg-white px-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <button type="button" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100" aria-label="תפריט">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        <span className="ml-1 inline-block shrink-0" aria-hidden>
          <img src="/idf-emblem.png" alt="" width={32} height={32} className="object-contain" />
        </span>
        <span className="text-base font-bold text-gray-900">בוקר טוב סהר</span>
      </div>

      <div className="flex items-center gap-1">
        <button type="button" className="relative flex size-10 items-center justify-center rounded-full hover:bg-gray-100 text-yellow-600" aria-label="התראות">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">7</span>
        </button>
        <button type="button" className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100" aria-label="פרופיל">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </header>
  );
}
