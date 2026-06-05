"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { PanInfo } from "motion/react";
import React from "react";

const SWIPE_OFFSET = 55;
const SWIPE_VELOCITY = 350;

const LABELS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

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

export default function MobileCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const slides = React.Children.toArray(children);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    let rafId: number;
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(check);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      const next = index + dir;
      if (next < 0 || next >= slides.length) return;
      setDirection(dir);
      setIndex(next);
    },
    [index, slides.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const onDragEnd = useCallback(
    (_: PointerEvent, info: PanInfo) => {
      setIsDragging(false);
      if (info.offset.x < -SWIPE_OFFSET || info.velocity.x < -SWIPE_VELOCITY) {
        navigate(1);
      } else if (
        info.offset.x > SWIPE_OFFSET ||
        info.velocity.x > SWIPE_VELOCITY
      ) {
        navigate(-1);
      }
    },
    [navigate],
  );

  // Desktop layout is owned by page.tsx's <main>; this component is overlay-only.
  if (!mounted || !isMobile) {
    return null;
  }

  const isFirst = index === 0;
  const isLast = index === slides.length - 1;

  return (
    <div className="fixed inset-0 bg-[#07090b] overflow-hidden z-10">
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
            left: isLast ? 0.04 : 0.14,
            right: isFirst ? 0.04 : 0.14,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={onDragEnd}
          className="absolute top-4 bottom-17 left-3 right-3 rounded-[20px] overflow-hidden will-change-transform"
          style={{
            touchAction: "pan-y",
            cursor: isDragging ? "grabbing" : "grab",
            boxShadow: "0 32px 80px -12px rgba(0,0,0,0.7)",
            border: index !== 0 ? "2px solid #ee690b" : "none",
          }}
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 z-0" />

          {/* Scrollable content — no z-index so logo stays above it */}
          <div
            className="absolute inset-0 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="min-h-full">{slides[index]}</div>
          </div>

          {/* Gradient mask behind logo so scrolling content fades out underneath */}
          <div className="absolute top-0 inset-x-0 h-20 bg-linear-to-b from-zinc-50 via-zinc-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 pointer-events-none z-10" />

          {/* Logo pinned inside card — z-20 keeps it above scroll content and gradient */}
          <div className="absolute top-5 left-5 z-20 pointer-events-none select-none">
            <span className="text-3xl font-semibold tracking-tight text-[#0B1014] dark:text-[#BBD3EB]">
              FE <span className="text-[#ee690b]">.</span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 inset-x-0 h-17 z-50 flex flex-col items-center justify-center gap-2 pointer-events-none">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500"
        >
          {LABELS[index]}
        </motion.span>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to ${LABELS[i]}`}
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

      {/* Edge hints */}
      {!isFirst && (
        <div className="absolute left-0 top-4 bottom-17 w-8 bg-linear-to-r from-[#07090b]/60 to-transparent pointer-events-none z-40" />
      )}
      {!isLast && (
        <div className="absolute right-0 top-4 bottom-17 w-8 bg-linear-to-l from-[#07090b]/60 to-transparent pointer-events-none z-40" />
      )}
    </div>
  );
}
