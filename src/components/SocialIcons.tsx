import { FC } from "react";

interface SocialIconProps {
  className?: string;
}

// Instagram with original brand gradient
export const InstagramIcon: FC<SocialIconProps> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGradient)" />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Facebook with official blue
export const FacebookIcon: FC<SocialIconProps> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#1877F2" />
    <path
      d="M13.5 12h2l.3-2.5h-2.3V8.2c0-.7.3-1.2 1.3-1.2h1.2V4.8c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9v1.8H8v2.5h2v6.2c.4.1.8.1 1.2.1.4 0 .9 0 1.3-.1V12z"
      fill="#ffffff"
    />
  </svg>
);

// X (formerly Twitter) with authentic black mark
export const XIcon: FC<SocialIconProps> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path
      d="M17.3 5h2.1l-4.6 5.3L20.2 19h-4.3l-3.4-4.4-3.8 4.4H6.6l4.9-5.6L6.2 5h4.4l3.1 4.1L17.3 5zm-.7 12.7h1.2L9.4 6.2H8.1l8.5 11.5z"
      fill="#ffffff"
    />
  </svg>
);

// TikTok with official cyan & red chromatic aberration brand style
export const TikTokIcon: FC<SocialIconProps> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#010101" />
    {/* Cyan layer */}
    <path
      d="M15.8 4.2c.5 1.5 1.7 2.6 3.2 2.8v2.7c-1.3 0-2.5-.4-3.5-1.2v6.6c0 3-2.4 5.4-5.4 5.4-2.8 0-5.1-2.1-5.3-4.8.4.3.9.5 1.5.5 2.1 0 3.8-1.7 3.8-3.8V5.3h3c.1 1.1.8 2.1 1.7 2.6.4-.3.7-.7 1-1.2V4.2z"
      fill="#25F4EE"
      opacity="0.9"
    />
    {/* Red layer */}
    <path
      d="M16.3 3.8c.5 1.5 1.7 2.6 3.2 2.8v2.7c-1.3 0-2.5-.4-3.5-1.2v6.6c0 3-2.4 5.4-5.4 5.4-2.8 0-5.1-2.1-5.3-4.8.4.3.9.5 1.5.5 2.1 0 3.8-1.7 3.8-3.8V4.9h3c.1 1.1.8 2.1 1.7 2.6.4-.3.7-.7 1-1.2V3.8z"
      fill="#FE2C55"
      opacity="0.9"
    />
    {/* White central icon */}
    <path
      d="M16 4c.5 1.5 1.7 2.6 3.2 2.8v2.7c-1.3 0-2.5-.4-3.5-1.2v6.6c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4 0-2.8 2.1-5.1 4.8-5.3v2.8c-1.3.2-2.2 1.3-2.2 2.5 0 1.4 1.2 2.6 2.6 2.6 1.5 0 2.6-1.2 2.6-2.6V4h3.3z"
      fill="#ffffff"
    />
  </svg>
);
