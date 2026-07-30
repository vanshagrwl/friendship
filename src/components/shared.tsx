import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* ---------- Slide wrapper: fade + float-up on every screen change ---------- */
const slideVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -24, scale: 0.98 },
};

export function Slide({
  id,
  children,
  layout = 'center',
  bgPink = false,
}: {
  id: number;
  children: ReactNode;
  layout?: 'center' | 'left';
  bgPink?: boolean;
}) {
  const align = layout === 'left' ? 'items-center sm:items-start' : 'items-center';
  return (
    <motion.div
      key={id}
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 flex h-full w-full flex-col ${align} justify-center px-6 py-10 text-center sm:px-12 ${
        bgPink ? 'bg-nfdPink text-white' : ''
      }`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Reusable pill button ---------- */
export function PillButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
}: {
  children: ReactNode;
  onClick: () => void;
  variant?: 'solid' | 'outline';
  className?: string;
}) {
  const base =
    'px-8 py-3 rounded-full font-sans font-semibold text-base sm:text-lg transition-colors duration-200 select-none';
  const styles =
    variant === 'solid'
      ? 'bg-nfdPink text-white shadow-lg hover:bg-nfdPinkDark'
      : 'bg-transparent text-nfdInk border-2 border-nfdInk hover:bg-nfdInk/5';
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}

/* ---------- Small floating heart accents ---------- */
export function Hearts({
  count = 5,
  className = '',
}: {
  count?: number;
  className?: string;
}) {
  const spots = [
    'top-[6%] left-[8%]',
    'top-[10%] right-[12%]',
    'bottom-[12%] left-[14%]',
    'bottom-[8%] right-[8%]',
    'top-[40%] left-[4%]',
    'top-[60%] right-[6%]',
    'bottom-[30%] right-[20%]',
  ];
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className={`pointer-events-none absolute text-nfdPink/70 ${spots[i % spots.length]} ${className}`}
          animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
          transition={{
            repeat: Infinity,
            duration: 2.6 + i * 0.4,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.span>
      ))}
    </>
  );
}

/* ---------- Decorative blob container (cream canvas with grid) ---------- */
export function BlobCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className="absolute h-full w-full bg-nfdCream bg-grid-paper bg-grid-sm shadow-2xl"
        style={{
          borderRadius: '42% 58% 65% 35% / 40% 45% 55% 60%',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: '42% 58% 65% 35% / 40% 45% 55% 60%',
          boxShadow: 'inset 0 0 120px rgba(210,93,116,0.18)',
        }}
      />
      <div className="relative z-10 h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}
