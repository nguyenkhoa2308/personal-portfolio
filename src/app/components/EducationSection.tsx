import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Cử nhân Kỹ thuật Phần mềm",
    school: "Đại học Công Nghiệp Hà Nội",
    location: "Hà Nội, Việt Nam",
    period: "2021 - 2025",
    gpa: "3.43/4.0",
    description:
      "Tốt nghiệp ngành Kỹ thuật Phần mềm, được trang bị nền tảng vững chắc về phát triển phần mềm, cơ sở dữ liệu và công nghệ web hiện đại. Định hướng sự nghiệp trở thành Frontend Developer chuyên nghiệp.",
    achievements: ["Nhận học bổng học kỳ 8 nhờ thành tích học tập xuất sắc"],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
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
            HỌC VẤN
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nền tảng học thuật vững chắc trong lĩnh vực công nghệ thông tin
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <div className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-foreground mb-2">
                      Thành tích nổi bật:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
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
      </div>
    </section>
  );
}
