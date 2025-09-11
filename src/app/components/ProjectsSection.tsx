import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Nền tảng thương mại điện tử hiện đại với React, Node.js và PostgreSQL. Tích hợp thanh toán và quản lý inventory.",
      image:
        "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzM1NDA1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Ứng dụng quản lý công việc với real-time collaboration, drag & drop interface và notifications.",
      image:
        "https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBkYXJrfGVufDF8fHx8MTc1NzM4NjE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["TypeScript", "Next.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard phân tích dữ liệu với biểu đồ interactive, real-time updates và export capabilities.",
      image:
        "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3Mzg2MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            DỰ ÁN
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Một số dự án gần đây mà tôi đã phát triển với các công nghệ hiện đại
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative overflow-hidden">
                  <Image
                    width={400}
                    height={192}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Hover overlay with links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary cursor-pointer group-hover:text-primary/80 transition-colors duration-300"
                  >
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Xem Tất Cả Dự Án
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
