// Illustration-style SVG icons for the Why Choose Us section

export function IllustrationShield({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      {/* Shield body */}
      <path d="M28 12l-13 5v9c0 8 5.5 15.5 13 18 7.5-2.5 13-10 13-18v-9L28 12z" fill="#3a7d44" />
      <path d="M28 15l-10 3.8v7.4c0 6.4 4.3 12.3 10 14.3 5.7-2 10-7.9 10-14.3v-7.4L28 15z" fill="#2d6235" />
      {/* Checkmark */}
      <path d="M22 28l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Badge dot */}
      <circle cx="38" cy="38" r="5" fill="#f59e0b" />
      <path d="M38 36v2.5M38 39.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IllustrationStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#fffbeb" />
      {/* Outer glow ring */}
      <circle cx="28" cy="28" r="18" fill="#fef3c7" />
      {/* Star */}
      <path d="M28 13l3.7 7.5 8.3 1.2-6 5.8 1.4 8.2L28 32l-7.4 3.7 1.4-8.2-6-5.8 8.3-1.2L28 13z" fill="#f59e0b" />
      {/* Inner highlight */}
      <path d="M28 17l2.5 5 5.5.8-4 3.8.9 5.4L28 30l-4.9 2 .9-5.4-4-3.8 5.5-.8L28 17z" fill="#fcd34d" />
      {/* Small check at bottom */}
      <circle cx="28" cy="42" r="5" fill="#3a7d44" />
      <path d="M25.5 42l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IllustrationCalendar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      {/* Calendar body */}
      <rect x="14" y="18" width="28" height="24" rx="4" fill="white" stroke="#3a7d44" strokeWidth="1.5" />
      {/* Header */}
      <rect x="14" y="18" width="28" height="8" rx="4" fill="#3a7d44" />
      <rect x="14" y="22" width="28" height="4" fill="#3a7d44" />
      {/* Calendar pins */}
      <line x1="21" y1="15" x2="21" y2="21" stroke="#2d6235" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="15" x2="35" y2="21" stroke="#2d6235" strokeWidth="2" strokeLinecap="round" />
      {/* Day dots grid */}
      <circle cx="21" cy="32" r="1.5" fill="#3a7d44" />
      <circle cx="28" cy="32" r="1.5" fill="#3a7d44" />
      <circle cx="35" cy="32" r="1.5" fill="#d1d5db" />
      <circle cx="21" cy="37" r="1.5" fill="#d1d5db" />
      <circle cx="28" cy="37" r="2.5" fill="#3a7d44" />
      <circle cx="35" cy="37" r="1.5" fill="#3a7d44" />
    </svg>
  )
}

export function IllustrationPound({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      {/* Outer coin */}
      <circle cx="28" cy="28" r="16" fill="#3a7d44" />
      <circle cx="28" cy="28" r="13" fill="#2d6235" />
      {/* £ symbol */}
      <path d="M32 34H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 30h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 22c-2.2 0-4 1.8-4 4v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Shine */}
      <path d="M22 20a1 1 0 012 0" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function IllustrationLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f9f0" />
      {/* Main leaf */}
      <path d="M28 40c0 0-14-7-12-20C18 12 28 10 28 10s10 2 12 10C42 33 28 40 28 40z" fill="#3a7d44" />
      {/* Leaf vein */}
      <path d="M28 40V16" stroke="#2d6235" strokeWidth="1.5" strokeLinecap="round" />
      {/* Side veins */}
      <path d="M28 28l-6-5M28 33l-8-4M28 25l6-4M28 30l7-3" stroke="#2d6235" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      {/* Water drop */}
      <path d="M20 38c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.2-4-6-4-6s-4 3.8-4 6z" fill="#6dd5a0" />
    </svg>
  )
}

export function IllustrationChat({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      {/* Main chat bubble */}
      <rect x="12" y="14" width="24" height="18" rx="4" fill="#3a7d44" />
      <path d="M18 32l-4 5 6-3" fill="#3a7d44" />
      {/* Second bubble */}
      <rect x="22" y="26" width="20" height="14" rx="4" fill="white" stroke="#3a7d44" strokeWidth="1.5" />
      <path d="M38 40l3 3-4-1" fill="white" stroke="#3a7d44" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Lightning bolt inside green bubble */}
      <path d="M26 19l-3 5h4l-3 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots in white bubble */}
      <circle cx="29" cy="33" r="1.2" fill="#3a7d44" />
      <circle cx="33" cy="33" r="1.2" fill="#3a7d44" />
      <circle cx="37" cy="33" r="1.2" fill="#3a7d44" />
    </svg>
  )
}
