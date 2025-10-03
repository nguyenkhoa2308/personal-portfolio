import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      {
        name: "JavaScript",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/20",
        logo: "/images/js.png",
      },

      {
        name: "TypeScript",
        color: "text-blue-400",
        bgColor: "bg-blue-400/20",
        logo: "/images/ts.png",
      },
      {
        name: "React",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/20",
        logo: "/images/react.png",
      },
      {
        name: "Next.Js",
        color: "text-white",
        bgColor: "bg-white/20",
        logo: "/images/nextjs.png",
      },
      {
        name: "Tailwind CSS",
        color: "text-cyan-300",
        bgColor: "bg-cyan-300/20",
        logo: "/images/tailwind.png",
      },
      {
        name: "Bootstrap",
        color: "text-purple-500",
        bgColor: "bg-purple-500/20",
        logo: "/logos/bootstrap.svg",
      },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      {
        name: "Node.Js",
        color: "text-green-500",
        bgColor: "bg-green-500/20",
        logo: "/images/node.png",
      },
      {
        name: "Express.Js",
        color: "text-gray-400",
        bgColor: "bg-gray-400/20",
        logo: "/images/ex.png",
      },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      {
        name: "SQL Server",
        color: "text-blue-500",
        bgColor: "bg-blue-500/20",
        logo: "/images/sqlserver.png",
      },
      {
        name: "MongoDB",
        color: "text-green-600",
        bgColor: "bg-green-600/20",
        logo: "/logos/mongodb.svg",
      },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      {
        name: "Git",
        color: "text-red-400",
        bgColor: "bg-red-400/20",
        logo: "/images/git.png",
      },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-24"
        >
          <motion.div
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-3 h-3 bg-background rounded-full" />
          </motion.div>
          <h2 className="text-2xl font-bold text-muted-foreground tracking-widest">
            MY SKILLS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16"
            >
              {/* Category Title */}
              <div className="lg:w-48 flex-shrink-0">
                <h3 className="text-4xl lg:text-5xl font-black text-muted-foreground tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-border/50 ${skill.bgColor} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer group`}
                    >
                      {/* <motion.div
                        className={`w-3 h-3 rounded-full ${skill.color.replace(
                          "text-",
                          "bg-"
                        )}`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      /> */}
                      <div>
                        <Image
                          src={skill.logo}
                          width={40}
                          height={40}
                          alt={`Logo ${skill.name}`}
                          className="max-h-10"
                        />
                      </div>
                      <span
                        className={`font-medium ${skill.color} group-hover:text-foreground transition-colors duration-300`}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-muted-foreground tracking-widest"
        >
          FRONTEND DEVELOPER
        </motion.div>
      </div>
    </section>
  );
}
