import { motion } from 'framer-motion';

/** Illustrated pink envelope with a ribbon, used on screens 4 & 5. */
export function Envelope({ size = 240 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 240 180"
      width={size}
      height={(size * 180) / 240}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      {/* back flap shadow */}
      <path d="M20 30 L120 95 L220 30 Z" fill="#e98aa0" />
      {/* body */}
      <rect x="20" y="30" width="200" height="130" rx="12" fill="#f4c6d2" stroke="#d25d74" strokeWidth="2" />
      {/* flap */}
      <path d="M20 30 L120 100 L220 30" fill="none" stroke="#d25d74" strokeWidth="2" />
      <path d="M20 30 L120 100 L220 30 L220 30 Z" fill="#f7d9e2" opacity="0.5" />
      {/* wax seal circle */}
      <circle cx="120" cy="100" r="16" fill="#d25d74" />
      <text x="120" y="106" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="700">
        ♥
      </text>
      {/* ribbon */}
      <path d="M120 40 L104 30 L104 54 Z" fill="#b14a5e" />
      <path d="M120 40 L136 30 L136 54 Z" fill="#b14a5e" />
      <circle cx="120" cy="40" r="6" fill="#7a2f3f" />
    </motion.svg>
  );
}

/** Illustrated 3D-style pink gift box used on screen 7. */
export function GiftBox({ size = 220 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
      transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
    >
      {/* lid */}
      <rect x="40" y="80" width="140" height="34" rx="6" fill="#e98aa0" stroke="#d25d74" strokeWidth="2" />
      {/* box body */}
      <rect x="52" y="112" width="116" height="80" rx="6" fill="#f4c6d2" stroke="#d25d74" strokeWidth="2" />
      {/* vertical ribbon */}
      <rect x="100" y="80" width="20" height="112" fill="#b14a5e" />
      {/* lid highlight */}
      <rect x="40" y="80" width="140" height="8" rx="4" fill="#fff" opacity="0.25" />
      {/* bow */}
      <path d="M110 80 L80 60 L80 86 Z" fill="#d25d74" />
      <path d="M110 80 L140 60 L140 86 Z" fill="#d25d74" />
      <path d="M110 80 L92 70 L92 90 Z" fill="#e98aa0" />
      <path d="M110 80 L128 70 L128 90 Z" fill="#e98aa0" />
      <circle cx="110" cy="80" r="8" fill="#7a2f3f" />
      {/* sparkles */}
      <text x="56" y="56" fontSize="14" fill="#fff3a6">✦</text>
      <text x="170" y="150" fontSize="12" fill="#fff3a6">✦</text>
    </motion.svg>
  );
}
