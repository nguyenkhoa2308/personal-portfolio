import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "CÔNG TY TNHH TRUYỀN THÔNG VÀ GIẢI PHÁP SỐ HAGENCY VIỆT NAMABC",
    location: "Hà Nội, Việt Nam",
    period: "7/2025 - Hiện tại",
    description:
      "Thực tập sinh Frontend Developer, hỗ trợ team phát triển giao diện web sử dụng Next.js và Tailwind CSS. Học hỏi quy trình làm việc chuyên nghiệp và best practices.",
    achievements: [
      "Tham gia phát triển và hoàn thiện nhiều phần giao diện cho website của công ty.",
      "Hoàn thành các task về UI components và tối ưu hiển thị trên nhiều thiết bị.",
      "Học và áp dụng Git workflow, tham gia code review để nâng cao chất lượng code.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="py-20 bg-muted/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tight"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            KINH NGHIỆM
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hành trình phát triển sự nghiệp với những dự án và thành tựu đáng
            nhớ
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-border -z-10" />

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
              />

              <div className="ml-16 p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-foreground">Thành tựu chính:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
