import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ngkhoa.dev@gmail.com",
      link: "mailto:ngkhoa.dev@gmail.com",
      description: "Send me an email anytime!"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+84 964 896 098",
      link: "tel:+84964896098",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hanoi, Vietnam",
      description: "Based in Vietnam's capital"
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/nguyenkhoa2308",
      color: "hover:text-[#333] dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/yourprofile",
      color: "hover:text-[#1877F2]"
    },
  ];

  return (
    <section className="py-20 bg-muted/10 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
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
            CONTACT
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let&apos;s discuss your next project. I&apos;m always ready to
            listen and provide consultation.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new collaboration opportunities,
              sharing ideas, or simply chatting about technology. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info?.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="block p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {info.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {info.description}
                </p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg`}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
