"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentText, setCurrentText] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  // Seeded PRNG so SSR and client render the same star field
  function mulberry32(seed: number) {
    let a = seed >>> 0;
    return function rand() {
      a += 0x6d2b79f5;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const [stars] = useState(() => {
    const rand = mulberry32(123456789);
    return Array.from({ length: 80 }, () => ({
      size: rand() * 3 + 1,
      left: rand() * 100,
      top: rand() * 100,
      delay: rand() * 3,
      duration: 2 + rand() * 3,
    }));
  });

  const fullText = "NGUYỄN ĐỨC KHOA";
  const subtitle = "FRONTEND DEVELOPER";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowProgress(true), 500);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Progress animation
  useEffect(() => {
    if (showProgress) {
      let progressValue = 0;
      const progressTimer = setInterval(() => {
        progressValue += Math.random() * 15;
        if (progressValue >= 100) {
          progressValue = 100;
          setProgress(100);
          clearInterval(progressTimer);
          setTimeout(onComplete, 600);
        } else {
          setProgress(progressValue);
        }
      }, 100);

      return () => clearInterval(progressTimer);
    }
  }, [showProgress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #111117 50%, #0a0a0f 100%)",
      }}
    >
      {/* Animated stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/70"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #00ff8820 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${20 + i * 3}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main text with typing effect */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary"
            style={{
              fontFamily: "Quicksand, sans-serif",
              letterSpacing: "0.05em",
              fontWeight: 700,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {currentText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="text-primary"
                style={{
                  display: "inline-block",
                  color: "#00ff88",
                }}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.013,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* Blinking cursor */}
            <motion.span
              className="text-primary"
              style={{ color: "#00ff88" }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <AnimatePresence>
            {currentText === fullText && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl mt-4 text-muted-foreground"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <AnimatePresence>
          {showProgress && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="mb-4">
                <motion.div
                  className="text-sm text-muted-foreground"
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    letterSpacing: "0.06em",
                    fontWeight: 400,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ĐANG TẢI...
                </motion.div>
              </div>

              {/* Progress track */}
              <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #00ff88 0%, #00ff88aa 100%)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Progress percentage */}
              <motion.div
                className="text-xs mt-2 font-bold text-primary"
                key={Math.floor(progress)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Math.floor(progress)}%
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />

      <motion.div
        className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
      />

      <motion.div
        className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      />

      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      />
    </motion.div>
  );
}
