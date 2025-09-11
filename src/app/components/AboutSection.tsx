import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl mb-32"
        >
          <h2 className="text-4xl lg:text-6xl leading-tight text-foreground mb-8">
            Tôi luôn nỗ lực học hỏi và áp dụng những công nghệ mới nhất để tạo
            ra các giao diện web hiện đại, đẹp mắt và tối ưu cho trải nghiệm
            người dùng.
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-px bg-border mb-16 origin-left"
        />

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.p
              className="text-sm text-muted-foreground mb-4 tracking-wider"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Đây là tôi.
            </motion.p>
            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Xin chào, tôi là Nguyễn Đức Khoa.
            </motion.h3>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Tôi là một Fresher Frontend Developer với niềm đam mê xây dựng
              giao diện web đẹp mắt và thân thiện với người dùng. Dù mới bắt đầu
              sự nghiệp, tôi luôn cố gắng học hỏi và cập nhật những công nghệ
              mới nhất.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Tôi đã tự học và thực hành qua nhiều dự án cá nhân, từ việc xây
              dựng landing page đến các ứng dụng web có tính tương tác. Mục tiêu
              của tôi là trở thành một Frontend Developer giỏi, có thể đóng góp
              vào các dự án thực tế và mang lại giá trị thiết thực cho người
              dùng.
            </motion.p>
          </motion.div>
        </div>

        {/* Side text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-muted-foreground tracking-widest"
        >
          FRONTEND DEVELOPER
        </motion.div>

        {/* Green accent line */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            isInView
              ? { opacity: 1, height: "120px" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 w-1 bg-primary"
        />
      </div>
    </section>
  );
}
