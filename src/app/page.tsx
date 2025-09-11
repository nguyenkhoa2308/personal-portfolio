"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes("#")) {
        e.preventDefault();
        const id = target.href.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleScroll);
    return () => document.removeEventListener("click", handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
        {!isLoading && (
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark relative">
            {/* Rich Starfield Background */}
            <div className="fixed inset-0 z-0">
              {/* Main stars */}
              {[...Array(200)].map((_, i) => {
                const size = Math.random() * 2 + 0.5;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const animationDelay = Math.random() * 3;
                const animationDuration = 2 + Math.random() * 4;

                return (
                  <div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-primary/40"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${left}%`,
                      top: `${top}%`,
                      animation: `twinkle ${animationDuration}s ease-in-out infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                  />
                );
              })}

              {/* Micro stars */}
              {[...Array(100)].map((_, i) => {
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const animationDelay = Math.random() * 5;

                return (
                  <div
                    key={`micro-${i}`}
                    className="absolute w-0.5 h-0.5 rounded-full bg-primary/20"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      animation: `twinkle 6s ease-in-out infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                  />
                );
              })}

              {/* Shooting stars */}
              {[...Array(3)].map((_, i) => {
                const startX = Math.random() * 100;
                const startY = Math.random() * 50;
                const animationDelay = Math.random() * 10 + 5;

                return (
                  <div
                    key={`shooting-${i}`}
                    className="absolute w-1 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-70"
                    style={{
                      left: `${startX}%`,
                      top: `${startY}%`,
                      transform: "rotate(45deg)",
                      animation: `shooting 8s linear infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                  />
                );
              })}

              {/* Constellation lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  <pattern
                    id="constellation"
                    x="0"
                    y="0"
                    width="400"
                    height="300"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M50,50 L120,80 L180,60 L220,120 L180,180 L120,160 L80,200"
                      stroke="#00ff88"
                      strokeWidth="0.5"
                      fill="none"
                      opacity="0.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="1"
                      fill="#00ff88"
                      opacity="0.6"
                    />
                    <circle
                      cx="120"
                      cy="80"
                      r="1"
                      fill="#00ff88"
                      opacity="0.6"
                    />
                    <circle
                      cx="180"
                      cy="60"
                      r="1"
                      fill="#00ff88"
                      opacity="0.6"
                    />
                    <circle
                      cx="220"
                      cy="120"
                      r="1"
                      fill="#00ff88"
                      opacity="0.6"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#constellation)" />
              </svg>

              {/* Nebula clouds */}
              <div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, #00ff8820 0%, #44ccff10 50%, transparent 70%)",
                  animation: "pulse 8s ease-in-out infinite",
                }}
              />

              <div
                className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, #6bcf7f15 0%, #00ff8810 50%, transparent 70%)",
                  animation: "pulse 10s ease-in-out infinite reverse",
                }}
              />

              <div
                className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full opacity-10 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, #ff6b6b15 0%, transparent 70%)",
                  animation: "pulse 12s ease-in-out infinite",
                }}
              />

              {/* Distant galaxies */}
              {[...Array(5)].map((_, i) => {
                const size = Math.random() * 20 + 10;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const rotation = Math.random() * 360;

                return (
                  <div
                    key={`galaxy-${i}`}
                    className="absolute opacity-5 blur-sm"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: `${size}px`,
                      height: `${size / 3}px`,
                      background:
                        "linear-gradient(90deg, transparent, #00ff88, transparent)",
                      transform: `rotate(${rotation}deg)`,
                      animation: "pulse 15s ease-in-out infinite",
                    }}
                  />
                );
              })}
            </div>
            <div className="relative z-10">
              <ScrollProgress />

              <main>
                <motion.section
                  id="home"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <HeroSection />
                </motion.section>

                <motion.section
                  id="about"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <AboutSection />
                </motion.section>

                <motion.section
                  id="experience"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <ExperienceSection />
                </motion.section>

                <motion.section
                  id="education"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <EducationSection />
                </motion.section>

                <motion.section
                  id="skills"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <SkillsSection />
                </motion.section>

                <motion.section
                  id="projects"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <ProjectsSection />
                </motion.section>

                <motion.section
                  id="contact"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <ContactSection />
                </motion.section>
              </main>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
