import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, Facebook } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          {/* Left side - Main content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-muted-foreground text-lg leading-relaxed"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                }}
              >
                <p className="mb-2">
                  Xin chào, tôi là{" "}
                  <span className="text-primary font-semibold">
                    Nguyễn Đức Khoa
                  </span>
                  , một Frontend Developer mới vào nghề với niềm đam mê xây dựng
                  các giao diện web hiện đại, responsive và thân thiện với người
                  dùng.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1, delay: 0.6 }}
                className="my-8"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85]">
                  <motion.span
                    className="text-primary block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    FRONTEND
                  </motion.span>
                  <motion.span
                    className="text-foreground block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 1, delay: 1.0 }}
                  >
                    DEVELOPER
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 lg:gap-6 items-center mt-8"
              >
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/nguyenkhoa2308"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card hover:bg-accent rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/ngkhoa.2308"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card hover:bg-accent rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-card hover:bg-accent rounded-full border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-foreground" />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.a
                  href="/CV_Nguyen_Duc_Khoa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                  className="inline-flex items-center rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg tracking-wider hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  TẢI CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer morphing glow */}
              <motion.div
                className="absolute inset-0 transform rotate-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div
                  className="w-80 h-96 bg-primary/15 blur-2xl"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                />
              </motion.div>

              {/* Main blob container */}
              <motion.div
                className="relative transform rotate-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 15 }}
              >
                {/* Animated blob shape */}
                <motion.div
                  className="w-80 h-96 relative overflow-hidden bg-gradient-to-br from-primary/5 to-card/10 backdrop-blur-sm"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    border: "3px solid rgba(0, 255, 136, 0.3)",
                    boxShadow: `
                      0 0 30px rgba(0, 255, 136, 0.2),
                      inset 0 0 30px rgba(0, 255, 136, 0.1),
                      0 20px 40px rgba(0, 0, 0, 0.3)
                    `,
                  }}
                  animate={{
                    borderRadius: [
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "30% 60% 70% 40% / 50% 60% 30% 60%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Inner content mask */}
                  <motion.div
                    className="absolute inset-2 overflow-hidden"
                    style={{
                      borderRadius: "58% 42% 33% 67% / 58% 33% 67% 42%",
                    }}
                    animate={{
                      borderRadius: [
                        "58% 42% 33% 67% / 58% 33% 67% 42%",
                        "33% 57% 67% 43% / 48% 57% 33% 57%",
                        "58% 42% 33% 67% / 58% 33% 67% 42%",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Profile Image */}
                    <Image
                      src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzM5ODIzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Minh Tuấn - Frontend Developer"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover object-center transform -rotate-12 scale-125"
                    />

                    {/* Organic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-background/20" />

                    {/* Floating particles inside */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => {
                        const size = Math.random() * 4 + 2;
                        const left = Math.random() * 100;
                        const top = Math.random() * 100;
                        const delay = Math.random() * 3;

                        return (
                          <motion.div
                            key={`particle-${i}`}
                            className="absolute rounded-full bg-primary/20"
                            style={{
                              width: `${size}px`,
                              height: `${size}px`,
                              left: `${left}%`,
                              top: `${top}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.2, 0.6, 0.2],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: delay,
                              ease: "easeInOut",
                            }}
                          />
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Liquid border animation */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/40 pointer-events-none"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    }}
                    animate={{
                      borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                      ],
                      borderColor: [
                        "rgba(0, 255, 136, 0.4)",
                        "rgba(0, 255, 136, 0.7)",
                        "rgba(0, 255, 136, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Glowing accent dots */}
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-primary/60"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <motion.div
                    className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/40"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />

                  <motion.div
                    className="absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full bg-primary/50"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  />
                </motion.div>
              </motion.div>

              {/* Organic floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-8 -right-12"
              >
                <motion.div
                  className="w-6 h-6 bg-primary/30"
                  style={{ borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%" }}
                  animate={{
                    rotate: 360,
                    borderRadius: [
                      "70% 30% 30% 70% / 60% 40% 60% 40%",
                      "30% 70% 70% 30% / 40% 60% 40% 60%",
                      "70% 30% 30% 70% / 60% 40% 60% 40%",
                    ],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-20 -left-10"
              >
                <motion.div
                  className="w-4 h-4 bg-primary/40"
                  style={{ borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%" }}
                  animate={{
                    rotate: -360,
                    borderRadius: [
                      "40% 60% 60% 40% / 70% 30% 70% 30%",
                      "60% 40% 40% 60% / 30% 70% 30% 70%",
                      "40% 60% 60% 40% / 70% 30% 70% 30%",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -bottom-6 right-8"
              >
                <motion.div
                  className="w-8 h-4 bg-gradient-to-r from-primary/30 to-primary/60"
                  style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
                  animate={{
                    borderRadius: [
                      "50% 50% 50% 50% / 60% 60% 40% 40%",
                      "70% 30% 30% 70% / 40% 40% 60% 60%",
                      "50% 50% 50% 50% / 60% 60% 40% 40%",
                    ],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Energy waves */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute top-12 -left-8"
              >
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  style={{ borderRadius: "50px" }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="absolute bottom-16 -right-8"
              >
                <motion.div
                  className="w-10 h-1 bg-gradient-to-l from-transparent via-primary/40 to-transparent"
                  style={{ borderRadius: "50px", transform: "rotate(45deg)" }}
                  animate={{
                    scaleX: [1, 1.8, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side text - Hidden on mobile to prevent overflow */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden lg:block absolute left-6 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground/60 tracking-[0.3em] whitespace-nowrap"
      >
        FRONTEND DEVELOPER
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
