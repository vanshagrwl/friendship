import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Heart } from 'lucide-react';
import type { ScreenIndex } from '@/data';
import { IMG } from '@/data';
import { Slide, PillButton, Hearts } from './shared';
import { Cat } from './Cat';
import { Envelope, GiftBox } from './Props';

type Props = { go: (s: ScreenIndex) => void };

/* ============================ SCREEN 0 — HOME ============================ */
/* Cat peeking top-right, text + Yes/No on the left. */
export function Screen0({ go }: Props) {
  return (
    <Slide id={0} layout="left">
      <Hearts count={4} />
      <div className="flex w-full max-w-3xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <motion.h1
            className="font-cursive text-6xl text-nfdPinkDark sm:text-8xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            OYEE
          </motion.h1>
          <p className="mt-2 font-sans text-lg text-nfdInk/80 sm:text-xl">
            I made something for you
          </p>
          <p className="mt-1 font-hand text-3xl text-nfdInk sm:text-4xl">
            Do you want to see?
          </p>
          <div className="mt-6 flex gap-4">
            <PillButton variant="solid" onClick={() => go(2)}>
              Yes
            </PillButton>
            <PillButton variant="outline" onClick={() => go(1)}>
              No
            </PillButton>
          </div>
        </div>
        <Cat variant="peek" size={200} className="shrink-0 drop-shadow-xl" />
      </div>
    </Slide>
  );
}

/* ====================== SCREEN 1 — THE "NO" CONSEQUENCE ===================== */
/* Judging cat peeking from top of canvas, bold "HOW DARE YOU!?" */
export function Screen1({ go }: Props) {
  return (
    <Slide id={1}>
      <Hearts count={3} />
      <div className="-mt-6">
        <Cat variant="curious" size={190} className="drop-shadow-xl" />
      </div>
      <h2 className="mt-4 font-cursive text-5xl text-nfdPinkDark sm:text-7xl">
        HOW DARE YOU!?
      </h2>
      <div className="mt-8">
        <PillButton variant="solid" onClick={() => go(0)}>
          Go back
        </PillButton>
      </div>
    </Slide>
  );
}

/* ============================ SCREEN 2 — GOOD GIRL ============================ */
export function Screen2({ go }: Props) {
  return (
    <Slide id={2}>
      <Hearts count={4} />
      <Cat variant="happy" size={200} className="drop-shadow-xl" />
      <h2 className="mt-2 font-cursive text-5xl text-nfdPinkDark sm:text-6xl">
        That&rsquo;s ma good girl
      </h2>
      <span className="mt-1 text-3xl">🌻</span>
      <div className="mt-6">
        <PillButton variant="solid" onClick={() => go(3)}>
          Click
        </PillButton>
      </div>
    </Slide>
  );
}

/* ====================== SCREEN 3 — HAPPY BESTFRIEND'S DAY ===================== */
/* Cat with glasses + heart hands at top, text lower-left, Next bottom-right. */
export function Screen3({ go }: Props) {
  return (
    <Slide id={3} layout="left">
      <Hearts count={6} />
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="order-2 flex flex-col items-center text-center sm:order-1 sm:items-start sm:text-left">
          <h2 className="font-cursive text-4xl leading-tight text-nfdPinkDark sm:text-5xl">
            HAPPY BESTFRIEND&rsquo;S DAY
          </h2>
          <p className="mt-3 font-sans text-base font-bold uppercase tracking-wide text-nfdInk sm:text-lg">
            You are my favorite notification
          </p>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-nfdInk/60 sm:text-sm">
            Stay cute, stay happy, stay mine
          </p>
          <div className="mt-3 flex gap-2 text-xl text-nfdPink">
            <span>♥</span>
            <span>♥</span>
            <span>♥</span>
          </div>
        </div>
        <div className="order-1 sm:order-2">
          <Cat variant="nerd" size={180} className="drop-shadow-xl" />
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <PillButton variant="solid" onClick={() => go(4)}>
          Next
        </PillButton>
      </div>
    </Slide>
  );
}

/* ============================ SCREEN 4 — ENVELOPE ============================ */
/* Big envelope centered, "Tap here to open" below. Whole thing clickable. */
export function Screen4({ go }: Props) {
  return (
    <Slide id={4}>
      <Hearts count={4} />
      <motion.button
        onClick={() => go(5)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="cursor-pointer outline-none"
        aria-label="Open the envelope"
      >
        <Envelope size={300} />
      </motion.button>
      <motion.p
        className="mt-4 font-cursive text-3xl text-nfdPinkDark sm:text-4xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Tap here to open
      </motion.p>
      <ArrowDown className="mt-2 h-6 w-6 animate-bounce text-nfdPink" />
    </Slide>
  );
}

/* ====================== SCREEN 5 — THE LOVING PARAGRAPH ===================== */
/* Envelope in bg, cat peeking left, note card with ribbon, heart locket. */
export function Screen5({ go }: Props) {
  return (
    <Slide id={5} layout="left">
      <Hearts count={4} />
      <div className="relative flex w-full max-w-3xl items-center gap-4">
        {/* cat peeking from left edge */}
        <div className="hidden shrink-0 sm:block">
          <Cat variant="peek" size={150} className="drop-shadow-xl" />
        </div>

        {/* note card */}
        <motion.div
          className="relative flex-1 rounded-2xl bg-white/90 p-6 shadow-2xl"
          initial={{ rotate: -2 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <p className="font-hand text-2xl leading-snug text-nfdInk sm:text-3xl">
            You are seen, you are heard, and you are loved, no matter what. If
            you ever feel unloved, remember that my love for you is boundless
            and endless!
          </p>
          {/* ribbon across the top of the card */}
          <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-nfdPink shadow" />
        </motion.div>
      </div>

      {/* heart locket bottom center */}
      <motion.div
        className="mt-6"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
      >
        <Heart className="h-10 w-10 fill-nfdPink text-nfdPink drop-shadow-lg" />
      </motion.div>

      <div className="absolute bottom-8 right-8">
        <PillButton variant="solid" onClick={() => go(6)}>
          Click here
        </PillButton>
      </div>
    </Slide>
  );
}

/* ============================ SCREEN 6 — POLAROIDS ============================ */
/* Full pink background override; photos on a string with clips. */
export function Screen6({ go }: Props) {
  const polaroids = [
    { src: IMG.friendA, rot: -6, label: 'us ♥' },
    { src: IMG.friendB, rot: 5, label: 'forever' },
    {
      src: IMG.friendC,
      rot: -3,
      label: 'bff',
      objectPosition: 'center bottom',
    },
  ];
  return (
    <Slide id={6} bgPink>
      <div className="relative mb-8 w-full max-w-2xl">
        {/* string */}
        <div className="polaroid-string absolute left-0 right-0 top-5 h-[3px] rounded-full" />
        <div className="relative flex justify-between gap-4 pt-10">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              {/* clip */}
              <div className="mb-1 h-4 w-3 rounded-sm bg-nfdInk/40 shadow" />
              <motion.div
                className="rounded-md bg-white p-2 pb-8 shadow-xl"
                style={{ rotate: p.rot }}
                whileHover={{ scale: 1.08, rotate: 0 }}
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="h-28 w-28 rounded-sm object-cover sm:h-32 sm:w-32"
                  style={
                    'objectPosition' in p
                      ? {
                          objectFit: 'cover',
                          objectPosition: p.objectPosition,
                        }
                      : undefined
                  }
                  loading="lazy"
                />
                <p className="mt-1 text-center font-hand text-base text-nfdInk">
                  {p.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <h2 className="font-cursive text-5xl text-white drop-shadow-lg sm:text-6xl">
        Best Friends Forever
      </h2>
      <p className="mt-2 font-sans text-base text-white/90 sm:text-lg">
        You don&rsquo;t know how much you mean to me
      </p>

      <div className="absolute bottom-8 right-8">
        <PillButton variant="solid" onClick={() => go(7)}>
          Click here
        </PillButton>
      </div>
    </Slide>
  );
}

/* ============================ SCREEN 7 — GIFT BOX ============================ */
export function Screen7({ go }: Props) {
  return (
    <Slide id={7}>
      <Hearts count={5} />
      <h2 className="font-cursive text-4xl text-nfdPinkDark sm:text-5xl">
        Here&rsquo;s a surprise for you!!!
      </h2>
      <motion.button
        onClick={() => go(8)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="mt-4 cursor-pointer outline-none"
        aria-label="Open the gift"
      >
        <GiftBox size={240} />
      </motion.button>
      <div className="mt-3 flex items-center gap-2 text-nfdPink">
        <span className="font-hand text-2xl sm:text-3xl">Tap here</span>
        <ArrowRight className="h-6 w-6 animate-pulse" />
      </div>
    </Slide>
  );
}

/* ============================ SCREEN 8 — FINALE ============================ */
export function Screen8(_: Props) {
  return (
    <Slide id={8}>
      <Hearts count={6} />
      <h2 className="font-cursive text-4xl text-nfdPinkDark sm:text-5xl">
        Ye lo colddrink pee lo
      </h2>
      <p className="mt-1 font-hand text-2xl text-nfdInk/80">
        Here&rsquo;s a little something for you &hearts;
      </p>
      <div className="mt-4">
        <Cat variant="offer" size={220} className="drop-shadow-xl" />
      </div>
      <motion.div
        className="mt-4 flex gap-2 text-2xl text-nfdPink"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </motion.div>
    </Slide>
  );
}
