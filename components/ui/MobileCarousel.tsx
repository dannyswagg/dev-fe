"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { PanInfo } from "motion/react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

const SWIPE_OFFSET = 55;
const SWIPE_VELOCITY = 350;
const TOUCH_SWIPE_OFFSET = 46;
const DUPLICATE_SWIPE_WINDOW = 220;

const SLIDES = [
  { label: "Home", content: <Hero /> },
  { label: "About", content: <About /> },
  { label: "Skills", content: <Skills /> },
  { label: "Projects", content: <Projects /> },
  { label: "Experience", content: <Experience /> },
  { label: "Contact", content: <Contact /> },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "108%" : "-108%",
    scale: 0.88,
    opacity: 0,
    rotateY: dir > 0 ? 6 : -6,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "108%" : "-108%",
    scale: 0.88,
    opacity: 0,
    rotateY: dir < 0 ? 6 : -6,
  }),
};

export default function MobileCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const lastSwipeAt = useRef(0);

  const navigate = useCallback(
    (dir: number) => {
      const next = index + dir;
      if (next < 0 || next >= SLIDES.length) return;
      setShowSwipeHint(false);
      setDirection(dir);
      setIndex(next);
    },
    [index],
  );

  const navigateFromSwipe = useCallback(
    (dir: number) => {
      const now = window.performance.now();
      if (now - lastSwipeAt.current < DUPLICATE_SWIPE_WINDOW) return;

      const next = index + dir;
      if (next < 0 || next >= SLIDES.length) return;

      lastSwipeAt.current = now;
      setShowSwipeHint(false);
      setDirection(dir);
      setIndex(next);
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShowSwipeHint(false), 5200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const onDragEnd = useCallback(
    (_: PointerEvent, info: PanInfo) => {
      setIsDragging(false);
      if (info.offset.x < -SWIPE_OFFSET || info.velocity.x < -SWIPE_VELOCITY) {
        navigateFromSwipe(1);
      } else if (
        info.offset.x > SWIPE_OFFSET ||
        info.velocity.x > SWIPE_VELOCITY
      ) {
        navigateFromSwipe(-1);
      }
    },
    [navigateFromSwipe],
  );

  const onTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const touch = event.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    },
    [],
  );

  const onTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (!touchStart.current) return;

      const touch = event.changedTouches[0];
      const offsetX = touch.clientX - touchStart.current.x;
      const offsetY = touch.clientY - touchStart.current.y;
      touchStart.current = null;

      if (
        Math.abs(offsetX) < Math.abs(offsetY) ||
        Math.abs(offsetX) < TOUCH_SWIPE_OFFSET
      ) {
        return;
      }

      navigateFromSwipe(offsetX < 0 ? 1 : -1);
    },
    [navigateFromSwipe],
  );

  const isFirst = index === 0;
  const isLast = index === SLIDES.length - 1;
  const isHome = index === 0;
  const activeSlide = SLIDES[index];

  return (
    <div className="fixed inset-0 bg-[#07090b] overflow-hidden z-10 md:hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0b1014_0%,_#07090b_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-[#ee690b]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Cards stack */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 320, damping: 32, mass: 0.9 },
            scale: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.22 },
            rotateY: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={{
            left: isLast ? 0 : 0.14,
            right: isFirst ? 0 : 0.14,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={onDragEnd}
          className={`absolute overflow-hidden will-change-transform min-h-0 ${
            isHome
              ? "inset-0 rounded-none"
              : "top-3 bottom-16 left-2.5 right-2.5 rounded-[18px]"
          }`}
          style={{
            touchAction: "pan-y pinch-zoom",
            cursor: isDragging ? "grabbing" : "grab",
            boxShadow: "0 32px 80px -12px rgba(0,0,0,0.7)",
            border: isHome ? "none" : "2px solid #ee690b",
          }}
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 z-0" />

          {/* Scrollable content — no z-index so logo stays above it */}
          <div
            className="mobile-carousel-card absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="min-h-full">{activeSlide.content}</div>
          </div>

          {/* Gradient mask behind logo so scrolling content fades out underneath */}
          <div
            className={`absolute top-0 inset-x-0 bg-linear-to-b pointer-events-none z-10 ${
              isHome
                ? "h-28 from-black/30 via-black/10 to-transparent"
                : "h-24 from-zinc-50 via-zinc-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80"
            }`}
          />

          {/* Logo pinned inside card — z-20 keeps it above scroll content and gradient */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none select-none">
            <span className="text-2xl font-semibold tracking-tight text-[#0B1014] dark:text-[#BBD3EB]">
              FE <span className="text-[#ee690b]">.</span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 inset-x-0 h-16 z-50 flex flex-col items-center justify-center gap-2 pointer-events-none">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"
        >
          {activeSlide.label}
        </motion.span>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {SLIDES.map(({ label }, i) => (
            <button
              key={label}
              onClick={() => {
                setShowSwipeHint(false);
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to ${label}`}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  backgroundColor:
                    i === index ? "#ee690b" : "rgba(113,113,122,0.4)",
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-full"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-none absolute inset-x-0 bottom-24 z-50 flex justify-center px-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-[#BBD3EB]/12 bg-[rgba(11,16,20,0.34)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#BBD3EB]/78 shadow-lg shadow-black/20 backdrop-blur-[2px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ee690b]/75" />
              <span>Swipe</span>
              <motion.span
                aria-hidden
                animate={{ x: [-3, 3, -3] }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="text-[#ee690b]/85"
              >
                &gt;
              </motion.span>
              <span className="sr-only">left or right to browse sections.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edge hints */}
      {!isFirst && (
        <div
          className={`absolute left-0 w-8 bg-linear-to-r from-[#07090b]/60 to-transparent pointer-events-none z-40 ${
            isHome ? "top-0 bottom-0" : "top-3 bottom-16"
          }`}
        />
      )}
      {!isLast && (
        <div
          className={`absolute right-0 w-8 bg-linear-to-l from-[#07090b]/60 to-transparent pointer-events-none z-40 ${
            isHome ? "top-0 bottom-0" : "top-3 bottom-16"
          }`}
        />
      )}
    </div>
  );
}
