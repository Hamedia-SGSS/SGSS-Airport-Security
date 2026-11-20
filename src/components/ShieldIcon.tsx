import React from "react";

export type ShieldIconName =
  | "badge"
  | "crowd"
  | "baggage"
  | "perimeter"
  | "clipboard"
  | "parking"
  | "search"
  | "cargo"
  | "bus"
  | "lock"
  | "check"
  | "plane"
  | "terminal"
  | "hub"
  | "warehouse"
  | "commercial";

interface ShieldIconProps {
  name: ShieldIconName;
  size?: number;
  className?: string;
}

const GLYPHS: Record<ShieldIconName, React.ReactNode> = {
  badge: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12.5" y="14.5" width="15" height="12" rx="1.8" />
      <circle cx="16.8" cy="19.2" r="1.6" fill="#ffffff" stroke="none" />
      <path d="M14.5 23.8c.5-1.4 1.5-2 2.3-2s1.8.6 2.3 2" />
      <line x1="21" y1="18.5" x2="25" y2="18.5" />
      <line x1="21" y1="21.8" x2="25" y2="21.8" />
    </g>
  ),
  crowd: (
    <g fill="#ffffff">
      <circle cx="17" cy="16" r="2.2" />
      <path d="M12.5 24.5c0-2.4 2-4 4.5-4s4.5 1.6 4.5 4v1.5h-9v-1.5z" />
      <circle cx="24" cy="17.2" r="1.8" />
      <path d="M22.3 26h5.2v-1.2c0-1.9-1.4-3.2-3.3-3.2-.7 0-1.4.2-1.9.5.6.8 1 1.8 1 2.9V26z" />
    </g>
  ),
  baggage: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 15.5v-1.8a1.2 1.2 0 0 1 1.2-1.2h4.6a1.2 1.2 0 0 1 1.2 1.2v1.8" />
      <rect x="13" y="15.5" width="14" height="11" rx="2" fill="#ffffff" stroke="none" />
      <line x1="17" y1="15.5" x2="17" y2="26.5" stroke="#1d2c48" strokeWidth="1.4" />
      <line x1="23" y1="15.5" x2="23" y2="26.5" stroke="#1d2c48" strokeWidth="1.4" />
    </g>
  ),
  perimeter: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="14" y1="14" x2="14" y2="27" />
      <line x1="20" y1="14" x2="20" y2="27" />
      <line x1="26" y1="14" x2="26" y2="27" />
      <line x1="12" y1="17.5" x2="28" y2="17.5" />
      <line x1="12" y1="22.5" x2="28" y2="22.5" />
    </g>
  ),
  clipboard: (
    <g fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="13.5" y="14.5" width="13" height="13" rx="1.8" />
      <path d="M17.5 14.5v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1" />
      <polyline points="17,21.2 19.2,23.4 23.5,18.8" />
    </g>
  ),
  parking: (
    <g>
      <rect x="13" y="13.5" width="14" height="14" rx="2.5" fill="none" stroke="#ffffff" strokeWidth="1.8" />
      <path
        d="M17.6 24V17h3.1c1.6 0 2.7 1 2.7 2.4s-1.1 2.4-2.7 2.4h-1.6V24h-1.5zm1.5-3.5h1.5c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1h-1.5v2.2z"
        fill="#ffffff"
      />
    </g>
  ),
  search: (
    <g fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18.8" cy="19.2" r="4.6" />
      <line x1="22.2" y1="22.6" x2="26.2" y2="26.6" />
    </g>
  ),
  cargo: (
    <g fill="#ffffff">
      <polygon points="20,12.8 27,16.6 20,20.4 13,16.6" />
      <polygon points="12.5,17.6 19.3,21.3 19.3,28.2 12.5,24.5" />
      <polygon points="27.5,17.6 20.7,21.3 20.7,28.2 27.5,24.5" />
    </g>
  ),
  bus: (
    <g fill="#ffffff">
      <path d="M14.5 14h11a2.5 2.5 0 0 1 2.5 2.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-.5v1.3a.8.8 0 0 1-.8.8h-1a.8.8 0 0 1-.8-.8v-1.3h-7v1.3a.8.8 0 0 1-.8.8h-1a.8.8 0 0 1-.8-.8v-1.3h-.5a1.5 1.5 0 0 1-1.5-1.5v-7.5A2.5 2.5 0 0 1 14.5 14zm-.5 2.5v4h12v-4H14zm2 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </g>
  ),
  lock: (
    <g fill="#ffffff">
      <path d="M16 18.5v-2.2a4 4 0 0 1 8 0v2.2h1.2a1.3 1.3 0 0 1 1.3 1.3v6.4a1.3 1.3 0 0 1-1.3 1.3H14.8a1.3 1.3 0 0 1-1.3-1.3v-6.4a1.3 1.3 0 0 1 1.3-1.3H16zm1.8 0h4.4v-2.2a2.2 2.2 0 0 0-4.4 0v2.2z" />
    </g>
  ),
  check: (
    <polyline
      points="13.5,21 18,25.5 26.8,16.2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  plane: (
    <path
      d="M27.5 21.8v-1.6l-6.3-3.9v-4.1c0-.8-.5-1.4-1.2-1.4s-1.2.6-1.2 1.4v4.1l-6.3 3.9v1.6l6.3-2v4.3l-1.9 1.4v1.2l3.1-.9 3.1.9v-1.2l-1.9-1.4v-4.3l6.3 2z"
      fill="#ffffff"
    />
  ),
  terminal: (
    <g fill="#ffffff">
      <path d="M12.5 24.5h15v1.8h-15v-1.8z" />
      <path d="M26.5 16.5c-.4-.7-1.3-.9-2-.5l-3.9 2.2-5-2.1-1.2.7 3.6 3.1-3.4 1.9-1.7-.7-.9.5 2.4 2.3 11.4-6.3c.7-.4.9-1.2.7-1.1z" />
    </g>
  ),
  hub: (
    <g fill="#ffffff">
      <circle cx="20" cy="15" r="2.2" />
      <circle cx="14.2" cy="24.5" r="2.2" />
      <circle cx="25.8" cy="24.5" r="2.2" />
      <path
        d="M20 17.2v3.3m0 0l-4.2 2.6m4.2-2.6l4.2 2.6"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </g>
  ),
  warehouse: (
    <g fill="#ffffff">
      <path d="M20 13l-8 4.4v9.6h3.2v-5.5h9.6V27H28v-9.6L20 13zm-3 10.5h6v1.4h-6v-1.4zm0 2.3h6V27h-6v-1.2z" />
    </g>
  ),
  commercial: (
    <g fill="#ffffff">
      <path d="M14 14h12v13h-3.8v-3.2h-4.4V27H14V14zm2.2 2.2v2h2v-2h-2zm5.6 0v2h2v-2h-2zm-5.6 3.8v2h2v-2h-2zm5.6 0v2h2v-2h-2z" />
    </g>
  ),
};

export function ShieldIcon({ name, size = 38, className }: ShieldIconProps) {
  const height = Math.round((size * 44) / 40);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2L36 8.5V20.5C36 30.8 29.1 38.6 20 42C10.9 38.6 4 30.8 4 20.5V8.5L20 2Z"
        fill="#1d2c48"
        stroke="#fecf31"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {GLYPHS[name]}
    </svg>
  );
}
