import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-muted/80 overflow-hidden z-50">
      <motion.div
        className="w-full bg-primary rounded-full h-full origin-bottom"
        style={{
          scaleY,
          transformOrigin: "top",
        }}
        initial={{ scaleY: 0 }}
      />
    </div>
  );
}
