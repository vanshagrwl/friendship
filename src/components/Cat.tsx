import { motion } from 'framer-motion';

/**
 * Reusable illustrated cat character so the SAME cat appears on every slide,
 * matching the consistent 3D-cartoon mascot seen in the reference deck.
 * Variants control expression / props without changing the body.
 */
export type CatVariant =
  | 'peek' // screen 0 — peeking from corner, just eyes + ears
  | 'curious' // screen 1 — wide eyes, slight frown (judging)
  | 'happy' // screen 2 — content, pink bow
  | 'nerd' // screen 3 — round glasses, heart hands
  | 'offer'; // screen 8 — holding a cola bottle

const FUR = '#f4f1ec';
const FUR_SHADOW = '#e2dcd2';
const INNER_EAR = '#f7b8c4';
const NOSE = '#e98aa0';
const EYE = '#3a2a2f';
const BLUSH = '#f6a9b8';

export function Cat({
  variant,
  size = 200,
  className = '',
}: {
  variant: CatVariant;
  size?: number;
  className?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
    >
      {/* ears */}
      <path d="M52 70 L40 28 L78 56 Z" fill={FUR} stroke={FUR_SHADOW} strokeWidth="2" />
      <path d="M148 70 L160 28 L122 56 Z" fill={FUR} stroke={FUR_SHADOW} strokeWidth="2" />
      <path d="M55 64 L48 40 L70 56 Z" fill={INNER_EAR} />
      <path d="M145 64 L152 40 L130 56 Z" fill={INNER_EAR} />

      {/* head */}
      <ellipse cx="100" cy="108" rx="62" ry="56" fill={FUR} stroke={FUR_SHADOW} strokeWidth="2" />

      {/* cheeks blush */}
      <ellipse cx="62" cy="128" rx="12" ry="8" fill={BLUSH} opacity="0.6" />
      <ellipse cx="138" cy="128" rx="12" ry="8" fill={BLUSH} opacity="0.6" />

      {/* eyes — vary by variant */}
      {variant === 'peek' ? (
        <>
          <ellipse cx="78" cy="104" rx="9" ry="11" fill={EYE} />
          <ellipse cx="122" cy="104" rx="9" ry="11" fill={EYE} />
          <circle cx="81" cy="100" r="3" fill="#fff" />
          <circle cx="125" cy="100" r="3" fill="#fff" />
        </>
      ) : variant === 'curious' ? (
        <>
          <circle cx="78" cy="106" r="12" fill="#fff" stroke={EYE} strokeWidth="2" />
          <circle cx="122" cy="106" r="12" fill="#fff" stroke={EYE} strokeWidth="2" />
          <circle cx="80" cy="108" r="6" fill={EYE} />
          <circle cx="120" cy="108" r="6" fill={EYE} />
          {/* tiny angry brows */}
          <path d="M66 88 L88 94" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
          <path d="M134 88 L112 94" stroke={EYE} strokeWidth="3" strokeLinecap="round" />
        </>
      ) : variant === 'happy' ? (
        <>
          <path d="M70 106 q8 6 16 0" stroke={EYE} strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M114 106 q8 6 16 0" stroke={EYE} strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      ) : variant === 'offer' ? (
        <>
          <circle cx="78" cy="106" r="10" fill="#fff" stroke={EYE} strokeWidth="2" />
          <circle cx="122" cy="106" r="10" fill="#fff" stroke={EYE} strokeWidth="2" />
          <circle cx="80" cy="108" r="5" fill={EYE} />
          <circle cx="120" cy="108" r="5" fill={EYE} />
          <circle cx="82" cy="105" r="2" fill="#fff" />
          <circle cx="122" cy="105" r="2" fill="#fff" />
        </>
      ) : (
        // nerd — round glasses over open eyes
        <>
          <circle cx="78" cy="106" r="9" fill={EYE} />
          <circle cx="122" cy="106" r="9" fill={EYE} />
          <circle cx="81" cy="103" r="3" fill="#fff" />
          <circle cx="125" cy="103" r="3" fill="#fff" />
          <circle cx="78" cy="106" r="15" fill="none" stroke="#5b2b3a" strokeWidth="3" />
          <circle cx="122" cy="106" r="15" fill="none" stroke="#5b2b3a" strokeWidth="3" />
          <path d="M93 106 H107" stroke="#5b2b3a" strokeWidth="3" />
        </>
      )}

      {/* nose + mouth */}
      <path d="M94 126 q6 5 12 0" fill={NOSE} />
      <path d="M100 131 q-6 6 -12 3" stroke={EYE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M100 131 q6 6 12 3" stroke={EYE} strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* whiskers */}
      <path d="M50 124 H72 M50 132 H72" stroke={FUR_SHADOW} strokeWidth="1.5" />
      <path d="M150 124 H128 M150 132 H128" stroke={FUR_SHADOW} strokeWidth="1.5" />

      {/* variant props */}
      {variant === 'happy' && (
        <g>
          {/* pink bow on the head */}
          <path d="M100 54 L84 44 L84 64 Z" fill="#e98aa0" />
          <path d="M100 54 L116 44 L116 64 Z" fill="#e98aa0" />
          <circle cx="100" cy="54" r="6" fill="#d25d74" />
        </g>
      )}

      {variant === 'nerd' && (
        <g>
          {/* heart hands below chin */}
          <path
            d="M70 168 q-10 -10 0 -18 q10 -4 10 8 q0 -12 10 -8 q10 8 0 18 l-10 8 z"
            fill="#e98aa0"
            stroke="#d25d74"
            strokeWidth="1.5"
          />
        </g>
      )}

      {variant === 'offer' && (
        <g>
          {/* cola bottle held in paws at the bottom */}
          <rect x="86" y="150" width="28" height="34" rx="4" fill="#b14a5e" />
          <rect x="92" y="142" width="16" height="12" rx="2" fill="#7a2f3f" />
          <rect x="86" y="158" width="28" height="14" fill="#fff" opacity="0.85" />
          <text x="100" y="170" textAnchor="middle" fontSize="9" fill="#7a2f3f" fontWeight="700">
            cola
          </text>
          {/* tiny paws */}
          <ellipse cx="82" cy="158" rx="8" ry="6" fill={FUR} stroke={FUR_SHADOW} strokeWidth="1.5" />
          <ellipse cx="118" cy="158" rx="8" ry="6" fill={FUR} stroke={FUR_SHADOW} strokeWidth="1.5" />
        </g>
      )}

      {variant === 'curious' && (
        <g>
          {/* single flower on the head */}
          <circle cx="132" cy="58" r="7" fill="#f7b8c4" />
          <circle cx="132" cy="58" r="3" fill="#fff3a6" />
          <path d="M132 65 L132 78" stroke="#7bb279" strokeWidth="2" />
        </g>
      )}
    </motion.svg>
  );
}
