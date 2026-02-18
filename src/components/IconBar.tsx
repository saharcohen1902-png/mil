export default function IconBar() {
  return (
    <div className="mt-4 flex flex-row-reverse justify-end gap-4 border-t border-gray-100 pt-3">
      <button type="button" className="text-gray-400 hover:text-gray-600" aria-label="תפריט">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      <span className="text-[#c9a227]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v2h18V7L12 2zm0 3.5l5.5 3.5H6.5L12 5.5z" />
        </svg>
      </span>
      <button type="button" className="relative text-gray-400 hover:text-gray-600" aria-label="התראות">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <span className="absolute -top-0.5 left-0 size-2.5 rounded-full bg-red-500" />
      </button>
      <button type="button" className="text-gray-400 hover:text-gray-600" aria-label="פרופיל">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>
    </div>
  );
}
