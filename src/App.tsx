import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import type { ScreenIndex } from '@/data';
import { BlobCanvas } from '@/components/shared';
import {
  Screen0,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
} from '@/components/screens';

const screens: Record<ScreenIndex, (p: { go: (s: ScreenIndex) => void }) => JSX.Element> = {
  0: Screen0,
  1: Screen1,
  2: Screen2,
  3: Screen3,
  4: Screen4,
  5: Screen5,
  6: Screen6,
  7: Screen7,
  8: Screen8,
};

const TOTAL = 9;

export default function App() {
  const [current, setCurrent] = useState<ScreenIndex>(0);

  const go = (s: ScreenIndex) => setCurrent(s);
  const back = () =>
    setCurrent((c) => (c > 0 ? ((c - 1) as ScreenIndex) : c));

  const Current = screens[current];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-nfdPink p-0 sm:p-6">
      {/* soft radial glow on the pink frame */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.25), transparent 60%)',
        }}
      />

      {/* Back button — hidden on home & "no" screen for flow control */}
      {current > 1 && (
        <motion.button
          onClick={back}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-4 z-30 flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 font-sans text-sm font-semibold text-nfdPinkDark shadow-md sm:left-8 sm:top-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </motion.button>
      )}

      {/* progress dots */}
      <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Main canvas — pink frame wrapping the cream blob */}
      <div className="relative h-screen w-full overflow-hidden sm:h-[92vh] sm:max-w-6xl sm:rounded-[2.5rem] sm:shadow-2xl">
        <BlobCanvas>
          <AnimatePresence mode="wait">
            <Current key={current} go={go} />
          </AnimatePresence>
        </BlobCanvas>
      </div>
    </div>
  );
}
