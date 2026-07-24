'use client'

// ─── Values section illustrations (56×56 viewBox) ────────────────────────────

export function IllustrationShield({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      <path d="M28 12l-13 5v9c0 8 5.5 15.5 13 18 7.5-2.5 13-10 13-18v-9L28 12z" fill="#3a7d44" />
      <path d="M28 15l-10 3.8v7.4c0 6.4 4.3 12.3 10 14.3 5.7-2 10-7.9 10-14.3v-7.4L28 15z" fill="#2d6235" />
      <path d="M22 28l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="38" r="5" fill="#f59e0b" />
      <path d="M38 36v2.5M38 39.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IllustrationHandshake({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      {/* Left arm */}
      <path d="M8 31 L20 27 Q22 25 24 27 L18 31 L8 35 Z" fill="#3a7d44" />
      {/* Right arm */}
      <path d="M48 31 L36 27 Q34 25 32 27 L38 31 L48 35 Z" fill="#2d6235" />
      {/* Clasped hands */}
      <path d="M18 27 Q28 20 38 27 Q38 35 28 37 Q18 35 18 27Z" fill="#3a7d44" />
      <path d="M22 28 Q28 24 34 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Star above */}
      <path d="M28 12 L29.5 16.5 L34 18 L29.5 19.5 L28 24 L26.5 19.5 L22 18 L26.5 16.5 Z" fill="#f59e0b" />
      <circle cx="42" cy="20" r="2" fill="#3a7d44" opacity="0.35" />
      <circle cx="14" cy="20" r="1.5" fill="#3a7d44" opacity="0.3" />
    </svg>
  )
}

export function IllustrationStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#fffbeb" />
      <circle cx="28" cy="28" r="18" fill="#fef3c7" />
      <path d="M28 13l3.7 7.5 8.3 1.2-6 5.8 1.4 8.2L28 32l-7.4 3.7 1.4-8.2-6-5.8 8.3-1.2L28 13z" fill="#f59e0b" />
      <path d="M28 17l2.5 5 5.5.8-4 3.8.9 5.4L28 30l-4.9 2 .9-5.4-4-3.8 5.5-.8L28 17z" fill="#fcd34d" />
      <circle cx="28" cy="42" r="5" fill="#3a7d44" />
      <path d="M25.5 42l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IllustrationCalendar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      <rect x="14" y="18" width="28" height="24" rx="4" fill="white" stroke="#3a7d44" strokeWidth="1.5" />
      <rect x="14" y="18" width="28" height="8" rx="4" fill="#3a7d44" />
      <rect x="14" y="22" width="28" height="4" fill="#3a7d44" />
      <line x1="21" y1="15" x2="21" y2="21" stroke="#2d6235" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="15" x2="35" y2="21" stroke="#2d6235" strokeWidth="2" strokeLinecap="round" />
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
      <circle cx="28" cy="28" r="16" fill="#3a7d44" />
      <circle cx="28" cy="28" r="13" fill="#2d6235" />
      <path d="M32 34H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 30h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 22c-2.2 0-4 1.8-4 4v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 20a1 1 0 012 0" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

export function IllustrationLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f9f0" />
      <path d="M28 40c0 0-14-7-12-20C18 12 28 10 28 10s10 2 12 10C42 33 28 40 28 40z" fill="#3a7d44" />
      <path d="M28 40V16" stroke="#2d6235" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 28l-6-5M28 33l-8-4M28 25l6-4M28 30l7-3" stroke="#2d6235" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M20 38c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.2-4-6-4-6s-4 3.8-4 6z" fill="#6dd5a0" />
    </svg>
  )
}

export function IllustrationChat({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#f0f7f1" />
      <rect x="12" y="14" width="24" height="18" rx="4" fill="#3a7d44" />
      <path d="M18 32l-4 5 6-3" fill="#3a7d44" />
      <rect x="22" y="26" width="20" height="14" rx="4" fill="white" stroke="#3a7d44" strokeWidth="1.5" />
      <path d="M38 40l3 3-4-1" fill="white" stroke="#3a7d44" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M26 19l-3 5h4l-3 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="29" cy="33" r="1.2" fill="#3a7d44" />
      <circle cx="33" cy="33" r="1.2" fill="#3a7d44" />
      <circle cx="37" cy="33" r="1.2" fill="#3a7d44" />
    </svg>
  )
}

// ─── Service card illustrations (56×56 viewBox, displayed larger) ─────────────

export function IllustrationHouseClean({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <path d="M28 11L10 26h6v19h24V26h6L28 11z" fill="#3a7d44" />
      <rect x="22" y="32" width="12" height="13" rx="2" fill="#2d6235" />
      <rect x="13" y="28" width="8" height="7" rx="1" fill="#6dd5a0" opacity="0.75" />
      <rect x="35" y="28" width="8" height="7" rx="1" fill="#6dd5a0" opacity="0.75" />
      <rect x="24" y="16" width="6" height="5" rx="1" fill="#6dd5a0" opacity="0.6" />
      <path d="M44 14 L45.5 18 L50 19.5 L45.5 21 L44 25 L42.5 21 L38 19.5 L42.5 18 Z" fill="#f59e0b" />
      <circle cx="10" cy="36" r="2.5" fill="#3a7d44" opacity="0.3" />
    </svg>
  )
}

export function IllustrationDeepClean({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <path d="M28 10 Q17 21 17 30 C17 39 22 44 28 44 C34 44 39 39 39 30 Q39 21 28 10Z" fill="#3a7d44" />
      <path d="M24 19 Q21 25 21 30 C21 36 23.5 40 26 41.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <circle cx="45" cy="28" r="6" fill="none" stroke="#3a7d44" strokeWidth="2" opacity="0.45" />
      <circle cx="45" cy="28" r="2.5" fill="#3a7d44" opacity="0.3" />
      <circle cx="11" cy="32" r="4.5" fill="none" stroke="#3a7d44" strokeWidth="1.5" opacity="0.4" />
      <circle cx="43" cy="15" r="3" fill="none" stroke="#3a7d44" strokeWidth="1.2" opacity="0.3" />
      <path d="M8 17 L9 21 L13 22 L9 23 L8 27 L7 23 L3 22 L7 21 Z" fill="#f59e0b" opacity="0.75" />
    </svg>
  )
}

export function IllustrationKeyClean({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <circle cx="18" cy="21" r="11" fill="#3a7d44" />
      <circle cx="18" cy="21" r="7" fill="#2d6235" />
      <circle cx="18" cy="21" r="3.5" fill="#e8f3ea" />
      <rect x="25" y="19" width="20" height="4.5" rx="2.5" fill="#3a7d44" />
      <rect x="38" y="23.5" width="3.5" height="6" rx="1" fill="#3a7d44" />
      <rect x="31" y="23.5" width="3.5" height="5" rx="1" fill="#3a7d44" />
      <rect x="35" y="36" width="15" height="11" rx="2.5" fill="none" stroke="#3a7d44" strokeWidth="1.8" />
      <line x1="38" y1="39.5" x2="47" y2="39.5" stroke="#3a7d44" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="38" y1="43" x2="45" y2="43" stroke="#3a7d44" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="9" cy="40" r="6.5" fill="#f59e0b" />
      <path d="M6.5 40l2 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IllustrationMovingBox({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#fef9f0" />
      <rect x="11" y="30" width="34" height="20" rx="2.5" fill="#f59e0b" opacity="0.85" />
      <path d="M11 30 L16 23 H40 L45 30 Z" fill="#fbbf24" />
      <line x1="28" y1="23" x2="28" y2="50" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
      <path d="M17 23 L21 30" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M35 30 L39 23" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M28 8 L22 16 H26 V21 H30 V16 H34 Z" fill="#3a7d44" />
      <path d="M40 15 L36 18.5 H37.5 V22.5 H42.5 V18.5 H44 Z" fill="none" stroke="#3a7d44" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

export function IllustrationSpringFlower({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#fff0f5" />
      <path d="M28 46 Q26 38 28 31" stroke="#3a7d44" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M28 39 Q23 36 23 32 Q26 32 28 39Z" fill="#3a7d44" opacity="0.7" />
      <ellipse cx="28" cy="22" rx="4.5" ry="9" fill="#fda4af" opacity="0.9" />
      <ellipse cx="28" cy="22" rx="4.5" ry="9" fill="#f9a8d4" opacity="0.85" transform="rotate(72 28 31)" />
      <ellipse cx="28" cy="22" rx="4.5" ry="9" fill="#fda4af" opacity="0.8" transform="rotate(144 28 31)" />
      <ellipse cx="28" cy="22" rx="4.5" ry="9" fill="#f9a8d4" opacity="0.85" transform="rotate(216 28 31)" />
      <ellipse cx="28" cy="22" rx="4.5" ry="9" fill="#fda4af" opacity="0.8" transform="rotate(288 28 31)" />
      <circle cx="28" cy="31" r="5.5" fill="#f59e0b" />
      <circle cx="28" cy="31" r="3" fill="#fbbf24" />
      <path d="M44 20 L45 23 L48 24 L45 25 L44 28 L43 25 L40 24 L43 23 Z" fill="#3a7d44" opacity="0.6" />
      <path d="M10 18 L11 21 L14 22 L11 23 L10 26 L9 23 L6 22 L9 21 Z" fill="#f59e0b" opacity="0.65" />
    </svg>
  )
}

export function IllustrationConstruction({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <path d="M12 35 Q12 21 28 19 Q44 21 44 35 Z" fill="#f59e0b" />
      <rect x="10" y="33" width="36" height="5.5" rx="3" fill="#d97706" />
      <rect x="8" y="36.5" width="40" height="3.5" rx="2" fill="#b45309" opacity="0.6" />
      <circle cx="10" cy="25" r="3.5" fill="#9ca3af" opacity="0.55" />
      <circle cx="47" cy="23" r="3" fill="#9ca3af" opacity="0.45" />
      <circle cx="8" cy="43" r="4.5" fill="#9ca3af" opacity="0.35" />
      <circle cx="48" cy="43" r="3.5" fill="#9ca3af" opacity="0.35" />
      <circle cx="20" cy="14" r="2.5" fill="#9ca3af" opacity="0.4" />
      <circle cx="38" cy="12" r="3" fill="#9ca3af" opacity="0.35" />
      <path d="M42 46 L43.5 50 L47 51 L43.5 52 L42 56 L40.5 52 L37 51 L40.5 50 Z" fill="#3a7d44" opacity="0.8" />
    </svg>
  )
}

export function IllustrationOfficeBuild({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <rect x="12" y="15" width="32" height="33" rx="2" fill="#3a7d44" />
      <rect x="8" y="13" width="40" height="5" rx="1.5" fill="#2d6235" />
      {/* Windows — 3 cols × 3 rows */}
      <rect x="17" y="22" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="25" y="22" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="33" y="22" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="17" y="29" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="25" y="29" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="33" y="29" width="5.5" height="4" rx="0.5" fill="white" opacity="0.45" />
      <rect x="17" y="36" width="5.5" height="4" rx="0.5" fill="white" opacity="0.25" />
      <rect x="33" y="36" width="5.5" height="4" rx="0.5" fill="white" opacity="0.25" />
      <rect x="24" y="38" width="8" height="10" rx="1" fill="white" opacity="0.2" />
      <circle cx="42" cy="42" r="8" fill="#f59e0b" />
      <path d="M39 42l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IllustrationShoppingBag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <path d="M14 26 L17 47 H39 L42 26 Z" fill="#3a7d44" />
      <rect x="14" y="23" width="28" height="5" rx="1.5" fill="#2d6235" />
      <path d="M19 23 Q19 13 28 13 Q37 13 37 23" fill="none" stroke="#2d6235" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 32 L29.5 36 L33.5 37 L29.5 38 L28 42 L26.5 38 L22.5 37 L26.5 36 Z" fill="white" opacity="0.55" />
      <circle cx="45" cy="19" r="3.5" fill="#f59e0b" opacity="0.75" />
      <path d="M9 32 L10 35 L13 36 L10 37 L9 40 L8 37 L5 36 L8 35 Z" fill="#f59e0b" opacity="0.5" />
    </svg>
  )
}

export function IllustrationMedicalCross({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#eff6ff" />
      <circle cx="28" cy="28" r="19" fill="#3a7d44" />
      <rect x="24" y="17" width="8" height="22" rx="2" fill="white" />
      <rect x="17" y="24" width="22" height="8" rx="2" fill="white" />
      <path d="M46 13 Q42 17 42 20 C42 23.5 43.5 25 44.5 25 C46.5 25 48 23 48 20 Q48 16 46 13Z" fill="#6dd5a0" opacity="0.7" />
      <circle cx="10" cy="14" r="5.5" fill="#e8f3ea" />
      <rect x="8.5" y="11.5" width="3" height="5" rx="0.5" fill="#3a7d44" opacity="0.6" />
      <rect x="7" y="13" width="6" height="3" rx="0.5" fill="#3a7d44" opacity="0.6" />
    </svg>
  )
}

export function IllustrationGradCap({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <path d="M28 13 L46 22 L28 31 L10 22 Z" fill="#3a7d44" />
      <path d="M16 24 L16 34 Q28 40 40 34 L40 24" fill="#2d6235" />
      <line x1="46" y1="22" x2="46" y2="33" stroke="#3a7d44" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="34" r="3.5" fill="#f59e0b" />
      <line x1="46" y1="37.5" x2="44" y2="44" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="46" y1="37.5" x2="46" y2="45" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="46" y1="37.5" x2="48" y2="44" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="8" y="39" width="20" height="13" rx="2" fill="white" stroke="#3a7d44" strokeWidth="1.8" />
      <line x1="12" y1="44" x2="24" y2="44" stroke="#3a7d44" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="47" x2="22" y2="47" stroke="#3a7d44" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="41" x2="20" y2="41" stroke="#3a7d44" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function IllustrationHouses({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      {/* Left small house */}
      <path d="M9 29 L17 21 L25 29 H22 V43 H12 V29 Z" fill="#3a7d44" opacity="0.5" />
      <rect x="15" y="35" width="4" height="8" rx="1" fill="#2d6235" opacity="0.5" />
      {/* Right larger house */}
      <path d="M24 27 L35 14 L46 27 H43 V44 H27 V27 Z" fill="#3a7d44" />
      <rect x="30" y="34" width="10" height="10" rx="2" fill="#2d6235" />
      <rect x="28" y="28" width="5.5" height="4.5" rx="1" fill="#6dd5a0" opacity="0.7" />
      <rect x="37" y="28" width="5.5" height="4.5" rx="1" fill="#6dd5a0" opacity="0.7" />
      <line x1="6" y1="44" x2="52" y2="44" stroke="#3a7d44" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
      <path d="M28 8 L29 11.5 L32.5 12.5 L29 13.5 L28 17 L27 13.5 L23.5 12.5 L27 11.5 Z" fill="#f59e0b" />
    </svg>
  )
}

export function IllustrationWarehouse({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="28" fill="#e8f3ea" />
      <rect x="7" y="28" width="42" height="22" rx="2" fill="#3a7d44" />
      <path d="M7 28 Q28 12 49 28" fill="#2d6235" />
      <rect x="38" y="14" width="5.5" height="14" rx="1" fill="#2d6235" />
      <circle cx="40.5" cy="11.5" r="3.5" fill="#9ca3af" opacity="0.5" />
      <circle cx="43" cy="7.5" r="2.5" fill="#9ca3af" opacity="0.35" />
      <rect x="19" y="36" width="18" height="14" rx="1.5" fill="#2d6235" opacity="0.7" />
      <line x1="19" y1="39.5" x2="37" y2="39.5" stroke="#3a7d44" strokeWidth="1" opacity="0.5" />
      <line x1="19" y1="43" x2="37" y2="43" stroke="#3a7d44" strokeWidth="1" opacity="0.5" />
      <line x1="19" y1="46.5" x2="37" y2="46.5" stroke="#3a7d44" strokeWidth="1" opacity="0.5" />
      <rect x="9" y="30" width="7" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="40" y="30" width="7" height="6" rx="1" fill="white" opacity="0.3" />
    </svg>
  )
}

// ─── About page hero illustration (large, white elements for green bg) ────────

export function IllustrationAboutHero({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" className={className} aria-hidden="true">
      <circle cx="140" cy="140" r="132" fill="white" fillOpacity="0.05" />
      <circle cx="140" cy="140" r="100" fill="white" fillOpacity="0.05" />
      {/* House */}
      <path d="M140 58L76 118h20v90h88V118h20L140 58z" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="120" y="160" width="40" height="48" rx="4" fill="white" fillOpacity="0.25" />
      <circle cx="154" cy="185" r="3.5" fill="white" fillOpacity="0.45" />
      <rect x="84" y="128" width="26" height="22" rx="3" fill="white" fillOpacity="0.3" />
      <line x1="97" y1="128" x2="97" y2="150" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="84" y1="139" x2="110" y2="139" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="170" y="128" width="26" height="22" rx="3" fill="white" fillOpacity="0.3" />
      <line x1="183" y1="128" x2="183" y2="150" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="170" y1="139" x2="196" y2="139" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="176" y="66" width="14" height="32" rx="2" fill="white" fillOpacity="0.18" />
      {/* Main sparkle */}
      <path d="M140 20 L143.5 31 L155 34.5 L143.5 38 L140 49 L136.5 38 L125 34.5 L136.5 31 Z" fill="white" fillOpacity="0.6" />
      {/* Side sparkles */}
      <path d="M56 82 L58 90 L66 92 L58 94 L56 102 L54 94 L46 92 L54 90 Z" fill="white" fillOpacity="0.35" />
      <path d="M218 65 L220 72 L227 74 L220 76 L218 83 L216 76 L209 74 L216 72 Z" fill="white" fillOpacity="0.3" />
      <path d="M58 218 L59.5 223 L65 224.5 L59.5 226 L58 231 L56.5 226 L51 224.5 L56.5 223 Z" fill="white" fillOpacity="0.3" />
      <path d="M224 210 L226 217 L233 219 L226 221 L224 228 L222 221 L215 219 L222 217 Z" fill="white" fillOpacity="0.4" />
      {/* Bubbles */}
      <circle cx="52" cy="155" r="20" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />
      <circle cx="232" cy="140" r="16" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" />
      <circle cx="228" cy="195" r="10" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.18" />
      <circle cx="48" cy="200" r="13" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.18" />
      {/* Heart */}
      <path d="M140 232 Q120 218 120 206 C120 198 126 193 133 193 C137 193 140 196 140 196 C140 196 143 193 147 193 C154 193 160 198 160 206 Q160 218 140 232Z" fill="white" fillOpacity="0.35" />
      {/* Broom */}
      <line x1="210" y1="188" x2="186" y2="216" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
      <ellipse cx="181" cy="220" rx="15" ry="5.5" fill="white" fillOpacity="0.28" transform="rotate(-40 181 220)" />
      {/* Accent dots */}
      <circle cx="214" cy="60" r="4.5" fill="white" fillOpacity="0.28" />
      <circle cx="66" cy="224" r="4" fill="white" fillOpacity="0.22" />
      <circle cx="218" cy="230" r="5.5" fill="white" fillOpacity="0.18" />
    </svg>
  )
}

// ─── Map: service id → illustration component ─────────────────────────────────

import type { FC } from 'react'

export const SERVICE_ILLUSTRATIONS: Record<string, FC<{ className?: string }>> = {
  regular:          IllustrationHouseClean,
  deep:             IllustrationDeepClean,
  eot:              IllustrationKeyClean,
  moveout:          IllustrationMovingBox,
  spring:           IllustrationSpringFlower,
  postconstruction: IllustrationConstruction,
  airbnb:           IllustrationHouseClean,
  office:           IllustrationOfficeBuild,
  retail:           IllustrationShoppingBag,
  healthcare:       IllustrationMedicalCross,
  education:        IllustrationGradCap,
  managed:          IllustrationHouses,
  industrial:       IllustrationWarehouse,
}
