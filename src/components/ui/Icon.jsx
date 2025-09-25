const icons = {
  spark: (
    <path
      d="M12 2.5 9.9 7.4 4 8.1l4.8 3.7L7.5 18l4.5-2.8 4.5 2.8-1.3-6.2L20 8.1l-5.9-0.7L12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  growth: (
    <>
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18V10l4 3 4-6v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  shield: (
    <path
      d="M12 3 5 6v6c0 4.2 3.6 7.8 7 9 3.4-1.2 7-4.8 7-9V6l-7-3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 4c-2 3-2 13 0 16 2-3 2-13 0-16Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
  analytics: (
    <>
      <path d="M5 18h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 21v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m7.1 7.1-1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m18.3 18.3-1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 12h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m7.1 16.9-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m18.3 5.7-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  ux: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
    </>
  ),
  calculator: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  )
};

export function Icon({ name, className = 'h-6 w-6', ...props }) {
  const path = icons[name];

  if (!path) {
    return null;
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" {...props}>
      {path}
    </svg>
  );
}
